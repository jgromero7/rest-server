const express = require('express');
const router = express.Router();
// Middlewares
const authMiddleware = require('../middlewares/auth-middlerware');
const isAuth = authMiddleware.isAuth;

// Controllers
const users = require('../controller/users');

// Routers
router.get('/users', isAuth, users.read);

router.get('/users/:id', isAuth, users.readByID);

// Router Public is function SignUp
router.post('/users/create', users.create);

router.put('/users/update/:id', isAuth, users.update);

router.delete('/users/delete/:id', isAuth, users.delete);

module.exports = router;
