const express = require('express')
const router = express.Router()

const halloffameController = require('../controllers/halloffame')
const auth = require('../middleware/auth')

router.post('/', auth, halloffameController.createScore)
router.put('/:id', auth, halloffameController.updateScore)
router.delete('/:id', auth, halloffameController.deleteScore)
router.get('/:id', halloffameController.readOneScore)
router.get('/count', auth, halloffameController.countScores)
router.get('/', halloffameController.readAllScores)

module.exports = router
