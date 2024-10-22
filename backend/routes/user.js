const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken');
const {jwtPass} = require('../config');


router.post('/signup', async (req, res) => {
    
});


module.exports = router