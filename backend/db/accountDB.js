const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://dip:dip2002@cluster0.y04du.mongodb.net/full-stack-todo"
// );

mongoose.connect(
  "mongodb+srv://ankanbiswas365:ankanbiswas365@cluster0.y04du.mongodb.net/full-stack-todo"
);

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
    type: Array,
    default: [],
  },
});

module.exports = {
  userDb,
};
