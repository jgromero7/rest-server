const express = require('express');
const router = express.Router();

const auth = require('../controller/auth');

router.post('/signin', auth.signIn);

router.get('/singout', auth.signOut);

module.exports = router;