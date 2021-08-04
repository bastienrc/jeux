const Score = require('./modelScore')

module.exports = function apiScore (app) {
  // Create
  app.post('/api/score', (req, res, next) => {
    const score = new Score({
      ...req.body
    })
    score.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
      .catch(error => res.status(400).json({ error }))
  })

  // Update
  app.put('/api/score/:id', (req, res, next) => {
    Score.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(score => res.status(200).json({ message: 'Objet modifié !' }))
      .catch(error => res.status(404).json({ error }))
  })

  // Delete
  app.delete('/api/score/:id', (req, res, next) => {
    Score.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
      .catch(error => res.status(400).json({ error }))
  })

  // Read
  app.get('/api/score/:id', (req, res, next) => {
    Score.findOne({ _id: req.params.id })
      .then(score => res.status(200).json(score))
      .catch(error => res.status(404).json({ error }))
  })

  // Count
  app.get('/api/Score-count', (req, res, next) => {
    Score.countDocuments()
      .then((nb) => res.status(200).json({ nbScore: nb }))
      .catch(error => res.status(404).json({ error }))
  })

  app.use('/api/score', (req, res, next) => {
    Score.find()
      .then(scores => res.status(200).json(scores))
      .catch(error => res.status(400).json({ error }))
  })
}
