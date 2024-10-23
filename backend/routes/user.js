const { Router } = require("express");
const router = Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../impDocs/jwt_key');
const { userDb } = require("../db/accountDB");


router.post('/seeTodo', async (req, res) => {
    
});

router.post('/createTodo', async (req, res) => {
    
});

router.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const findUser = await userDb.findOne({
    email: email,
    password: password
  })

  if(findUser) {
    const token = jwt.sign({ email: email },SECRET_KEY);
    res.status(200).json({ jwt: token });
    return;
  }
  res.json({ mes: "user not found create account" });
});

router.post('/signup', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  
  
  const findUser = await userDb.findOne({
    email: email,
    password: password
  })

  if(findUser) {
    res.json({mes: "user found create a new one"});
    return;
  }
  await userDb.create({
    name: name,
    email: email,
    password: password
  })
  res.json({mes: "user account created"});
});


module.exports = router