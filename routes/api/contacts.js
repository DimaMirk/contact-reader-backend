const express = require("express");
const router = express.Router();
const cntrl = require('../../controls/contrl');
const { validateBody } = require("../../middlewares");
const { isValidId } = require("../../middlewares")
const schemas = require('../../schemas/contact.js')

router.get('/', cntrl.all)
router.get('/:id', isValidId, cntrl.getById)
router.post('/',  cntrl.post)
router.put('/:id',isValidId, validateBody(schemas.contactSchema), cntrl.put)
router.delete('/:id', cntrl.deleteById)

module.exports = router;