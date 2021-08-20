const express = require('express')
const router = express.Router()

const halloffameController = require('../controllers/halloffame')

router.post('/', halloffameController.createScore)
router.put('/:id', halloffameController.updateScore)
router.delete('/:id', halloffameController.deleteScore)
router.get('/:id', halloffameController.readOneScore)
router.get('/count', halloffameController.countScores)
router.get('/', halloffameController.readAllScores)

module.exports = router
