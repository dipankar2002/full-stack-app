const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dipankar:dipankar2002@cluster0.ggoivze.mongodb.net/Todo_with_MERN");

const userDb = mongoose.model('user',{
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  todo: {
    type: Array,
    default: []
  }
});

module.exports = {
  userDb
}