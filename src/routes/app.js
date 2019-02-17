const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth-middlerware');
const isAuth = authMiddleware.isAuth;

router.get('/', (req, res) => {
	res.send('Welcome to Rest API');
});

module.exports = router;
