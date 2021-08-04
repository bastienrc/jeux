const express = require('express')
const mongoose = require('mongoose')
const Score = require('./models/score')
const bodyParser = require("body-parser")

const app = express()

mongoose.connect(`${process.env.DATABASE_URL}?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json())

// Create
app.post('/api/score', (req, res, next) => {
  const score = new Score({
    ...req.body
  });
  score.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

// Update
app.put('/api/score/:id', (req, res, next) => {
  Score.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(score => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(404).json({ error }));
});

// Delete
app.delete('/api/score/:id', (req, res, next) => {
  Score.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});

// Read
app.get('/api/score/:id', (req, res, next) => {
  Score.findOne({ _id: req.params.id })
    .then(score => res.status(200).json(score))
    .catch(error => res.status(404).json({ error }));
});

app.use('/api/score', (req, res, next) => {
  Score.find()
    .then(scores => res.status(200).json(scores))
    .catch(error => res.status(400).json({ error }))
})

module.exports = app
