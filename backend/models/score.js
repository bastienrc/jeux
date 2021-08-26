const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
  score: { type: Number, required: true },
  player: { type: String, required: true, trim: true }
}, { timestamps: true })

module.exports = mongoose.model('Score', scoreSchema)
