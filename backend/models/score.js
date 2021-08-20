const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
  score: { type: Number, required: true },
  player: { type: String, required: true, trim: true },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now }
})

module.exports = mongoose.model('Score', scoreSchema)
