const HallOfFame = require('./modelHallOfFame')

module.exports = function apiHallOfFame (app) {
  // Create
  app.post('/api/halloffame', (req, res, next) => {
    const halloffame = new HallOfFame({
      ...req.body
    })
    halloffame.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
      .catch(error => res.status(400).json({ error }))
  })

  // Update
  app.put('/api/halloffame/:id', (req, res, next) => {
    HallOfFame.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(halloffame => res.status(200).json({ message: 'Objet modifié !' }))
      .catch(error => res.status(404).json({ error }))
  })

  // Delete
  app.delete('/api/halloffame/:id', (req, res, next) => {
    HallOfFame.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
      .catch(error => res.status(400).json({ error }))
  })

  // Read
  app.get('/api/halloffame/:id', (req, res, next) => {
    HallOfFame.findOne({ _id: req.params.id })
      .then(halloffame => res.status(200).json(halloffame))
      .catch(error => res.status(404).json({ error }))
  })

  // Count
  app.get('/api/HallOfFame-count', (req, res, next) => {
    HallOfFame.countDocuments()
      .then((nb) => res.status(200).json({ nbHallOfFame: nb }))
      .catch(error => res.status(404).json({ error }))
  })

  app.use('/api/halloffame', (req, res, next) => {
    HallOfFame.find()
      .then(halloffames => res.status(200).json(halloffames))
      .catch(error => res.status(400).json({ error }))
  })
}
