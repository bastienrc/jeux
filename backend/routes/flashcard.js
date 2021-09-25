const express = require('express')
const router = express.Router()

const flashcardController = require('../controllers/flashcard')
// const auth = require('../middleware/auth')
// const multer = require('../middleware/multer-config')

// router.post('/', auth, multer, flashcardController.createCard)
// router.put('/:id', auth, multer, flashcardController.updateCard)
// router.delete('/:id', auth, flashcardController.deleteCard)
// router.get('/:id', auth, flashcardController.readOneCard)
// router.get('/', auth, flashcardController.readAllCards)

router.post('/', flashcardController.createCard)
router.put('/:id', flashcardController.updateCard)
router.delete('/:id', flashcardController.deleteCard)
router.get('/:id', flashcardController.readOneCard)
router.get('/', flashcardController.readAllCards)

module.exports = router
