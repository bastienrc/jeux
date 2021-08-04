const mongoose = require('mongoose')

const halloffameSchema = mongoose.Schema({
  scores: { type: Number, required: true },
  player: { type: String, required: true, trim: true },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now }
})

module.exports = mongoose.model('HallOfFame', halloffameSchema)
