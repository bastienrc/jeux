const express = require('express')
const mongoose = require('mongoose')

const halloffameRoutes = require('./routes/halloffame')
const userRoutes = require('./routes/user')

const app = express()

mongoose.connect(`${process.env.DATABASE_URL}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

app.use(express.json())

app.use('/api/halloffame', halloffameRoutes)
app.use('/api/user', userRoutes)

module.exports = app
