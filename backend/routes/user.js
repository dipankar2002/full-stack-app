const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const SECRET_KEY = require("../impDocs/jwt_key");
const { userDb } = require("../db/accountDB");
const { createTodo } = require("../zod/type");
const userMiddleware = require("../middlewares/userAuth");
const crypto = require("crypto");
const { hashPassword, comparePassword } = require("../middlewares/hash");

router.put("/updateTodo", async (req, res) => {});

router.post("/homePage", userMiddleware, async (req, res) => {
  const user = await userDb.findOne({
    email: req.email,
  });

  if (!user) {
    return res.json({ mes: "user not found. Try login again" });
  }

  console.log(user);

  return res.json(user.todo);
});

router.post("/createTodo", userMiddleware, async (req, res) => {
  try {
    const todoBody = req.body;
    todoBody.id = crypto.randomBytes(16).toString("hex");
    todoBody.date = new Date();
    todoBody.status = false;
    const parsedBody = createTodo.safeParse(todoBody);
    if (!parsedBody.success) {
      return res.status(411).json({
        message: "Wrong inputs",
      });
    }

    if (!req.email) {
      res.status(422).json({
        message: "Containes invalid or unacceptable data",
      });
      return;
    }
    console.log(req.email);

    const user = await userDb.findOne({
      email: req.email,
    });

    if (!user) {
      return res.json({ mes: "user not found" });
    }

    await user.todo.push({
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
  try {
    const email = req.body.email;
    const password = req.body.password;

    const findUser = await userDb.findOne({
      email: email,
    });

    if (!findUser) {
      return res.json({
        message: "User does not exists",
      });
      return;
    }
    const isMatch = await comparePassword(password, findUser.password);
    if (!isMatch) {
      return res.json({
        message: "Wrong Password",
      });
    }

    if (isMatch) {
      const token = jwt.sign({ email: email }, SECRET_KEY);
      return res.status(200).json({ jwt: token });
    }
    res.json({ mes: "user not found create account" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

router.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const findUser = await userDb.findOne({
      email: email,
    });

    if (findUser) {
      res.status(409).json({ mes: "User already exists" });
      return;
    }
    const hashedPassword = await hashPassword(password);

    await userDb.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    res.json({ mes: "user account created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

module.exports = router;
