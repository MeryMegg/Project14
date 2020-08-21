const router = require('express').Router();
const {
  getCards, createCard, deleteUserId, likeCard, dislikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:id', deleteUserId);
router.put('/:id/likes', likeCard);
router.delete('/:id/likes', dislikeCard);
module.exports = router;
