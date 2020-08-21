const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: {
      validator: (link) => validator.isURL(link),
      message: (props) => `${props.value} некорректный адрес!`,
    },
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
