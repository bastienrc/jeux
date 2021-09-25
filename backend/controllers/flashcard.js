const Card = require('../models/card')
const fs = require('fs')

exports.createCard = (req, res, next) => {
  const cardObject = JSON.parse(req.body.card)
  delete cardObject._id
  const card = new Card({
    ...cardObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  })
  card.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch(error => res.status(400).json({ error }))
}

exports.updateCard = (req, res, next) => {
  const cardObject = req.file
    ? {
        ...JSON.parse(req.body.card),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      }
    : {
        ...req.body
      }
  Card.updateOne({ _id: req.params.id }, { ...cardObject, _id: req.params.id })
    .then(card => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(404).json({ error }))
}

exports.deleteCard = (req, res, next) => {
  Card.findOne({ _id: req.params.id })
    .then(card => {
      const filename = card.imageUrl.split('/images/')[1]
      fs.unlink(`images/${filename}`, () => {
        Card.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
          .catch(error => res.status(400).json({ error }))
      })
    })
    .catch(error => res.status(500).json({ error }))
}

exports.readOneCard = (req, res, next) => {
  Card.findOne({ _id: req.params.id })
    .then(card => res.status(200).json(card))
    .catch(error => res.status(404).json({ error }))
}

exports.readAllCards = (req, res, next) => {
  Card.find()
    .then(cards => res.status(200).json(cards))
    .catch(error => res.status(400).json({ error }))
}
