const router = require('express').Router(); // создали роутер
const {
  getUsers, getUserId, createUser, updateUserProfile, updateUserAvatar,
} = require('../controllers/users');

router.get('/:id', getUserId);
router.patch('/me', updateUserProfile);
router.patch('/me/avatar', updateUserAvatar);
router.get('/', getUsers);
router.post('/', createUser);

module.exports = router; // экспортировали роутер
