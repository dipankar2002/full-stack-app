const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const SECRET_KEY = require("../impDocs/jwt_key");
const { userDb } = require("../db/accountDB");
const { createTodo } = require("../zod/type");
const userMiddleware = require("../middlewares/userAuth");
const crypto = require("crypto");

router.post("/seeTodo", async (req, res) => {});

router.post("/createTodo", async (req, res) => {
  try {
    const todoBody = req.body;
    todoBody.id = crypto.randomBytes(16).toString("hex");
    todoBody.date = new Date();
    todoBody.status = false;
    const parsedBody = createTodo.safeParse(todoBody);

    if (!parsedBody.success) {
      res.status(422).json({
        message: "Containes invalid or unacceptable data",
      });
      return;
    }

    const user = await userDb.findOne({
      email: req.headers.email,
    });

    user.todo.push({
      id: todoBody.id,
      title: todoBody.title,
      description: todoBody.description,
      status: todoBody.status,
      date: todoBody.date,
    });

    await user.save();

    return res.status(200).json({
      message: "Todo added",
      todo: user.todo,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const findUser = await userDb.findOne({
    email: email,
    password: password,
  });

  if (findUser) {
    const token = jwt.sign({ email: email }, SECRET_KEY);
    res.status(200).json({ jwt: token });
    return;
  }
  res.json({ mes: "user not found create account" });
});

router.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const findUser = await userDb.findOne({
    email: email,
    password: password,
  });

  if (findUser) {
    res.json({ mes: "user found create a new one" });
    return;
  }
  await userDb.create({
    name: name,
    email: email,
    password: password,
  });
  res.json({ mes: "user account created" });
});

module.exports = router;
