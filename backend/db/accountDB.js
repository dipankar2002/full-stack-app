const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://dip:dip2002@cluster0.y04du.mongodb.net/full-stack-todo"
// );

mongoose.connect(
  "mongodb+srv://ankanbiswas365:ankanbiswas365@cluster0.y04du.mongodb.net/full-stack-todo"
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
