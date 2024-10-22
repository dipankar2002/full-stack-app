const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken');
const {jwtPass} = require('../config');


router.post('/seeTodo', async (req, res) => {
    
});

router.post('/createTodo', async (req, res) => {
    
});

router.post('/login', async (req, res) => {
    
});

router.post('/signup', async (req, res) => {
    
});


module.exports = router