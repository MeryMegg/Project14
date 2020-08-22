const router = require('express').Router(); // создали роутер
const {
  getUsers, getUserId, createUser, updateUserProfile, updateUserAvatar, login,
} = require('../controllers/users');
const auth = require('../middlewares/auth');

router.post('/signin', login);
router.post('/signup', createUser);
router.get('/:id', auth, getUserId);
router.patch('/me', auth, updateUserProfile);
router.patch('/me/avatar', auth, updateUserAvatar);
router.get('/', auth, getUsers);

module.exports = router; // экспортировали роутер
