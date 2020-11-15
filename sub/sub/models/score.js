const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
    points: { type: Number, required: true },
    user: { type: String, required: true, trim: true },
    created_at: { type: Date, required: true, default: Date.now }
})

module.exports = mongoose.model('Score', scoreSchema)
