const express = require("express");
const router = express.Router();
const cntrl = require('../../controls/contrl');
const { validateBody } = require("../../middlewares");
const schemas = require('../../schemas/contact.js')

router.get('/', cntrl.all)
router.get('/:id', cntrl.getById)
router.post('/', validateBody(schemas.contactSchema), cntrl.post)
router.put('/:id',validateBody(schemas.contactSchema), cntrl.put)
router.delete('/:id', cntrl.deleteById)

module.exports = router;