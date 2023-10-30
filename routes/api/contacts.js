const express = require("express");
const router = express.Router();
const cntrl = require('../../controls/contrl');
const { isValidId, validateBody,aunthentificate } = require("../../middlewares")
const schemas = require('../../schemas/contact.js')

router.get('/', aunthentificate, cntrl.all)
router.get('/:id', aunthentificate, isValidId, cntrl.getById)
router.post('/', aunthentificate,  cntrl.post)
router.put('/:id', aunthentificate, isValidId, validateBody(schemas.contactSchema), cntrl.put)
router.delete('/:id', aunthentificate, cntrl.deleteById)

module.exports = router;