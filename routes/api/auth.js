const express = require("express");
const router = express.Router();

const { validateBody, aunthentificate } = require("../../middlewares");
const { schemas } = require('../../models/user');

const ctrl = require('../../controls/auth');

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post('/signIn', validateBody(schemas.loginSchema), ctrl.login);

router.get('/current', aunthentificate, ctrl.getCurrent);

router.post('/logout', aunthentificate, ctrl.logout);


module.exports = router;