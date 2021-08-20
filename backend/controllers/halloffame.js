const Score = require('../models/score')

exports.createScore = (req, res, next) => {
  const score = new Score({
    ...req.body
  })
  score.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch(error => res.status(400).json({ error }))
}

exports.updateScore = (req, res, next) => {
  Score.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(score => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(404).json({ error }))
}

exports.deleteScore = (req, res, next) => {
  Score.findOne({ _id: req.params.id })
    .then(() => {
      Score.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(500).json({ error }))
}

exports.readOneScore = (req, res, next) => {
  Score.findOne({ _id: req.params.id })
    .then(score => res.status(200).json(score))
    .catch(error => res.status(404).json({ error }))
}

exports.countScores = (req, res, next) => {
  Score.countDocuments()
    .then((nb) => res.status(200).json({ nbScore: nb }))
    .catch(error => res.status(404).json({ error }))
}

exports.readAllScores = (req, res, next) => {
  Score.find()
    .then(scores => res.status(200).json(scores))
    .catch(error => res.status(400).json({ error }))
}
