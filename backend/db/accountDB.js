const mongoose = require("mongoose");



mongoose.connect(
  process.env.MONGODB_URL
);

const todoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const userDb = mongoose.model("user", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  todo: {
    type: [todoSchema],
    default: [],
  },
});

module.exports = {
  userDb,
};
