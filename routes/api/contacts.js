const express = require("express");
const router = express.Router();
const cntrl = require('../../controls/contrl')


router.get('/', cntrl.all)
router.get('/:id', cntrl.getById)
router.post('/', cntrl.post)
router.put('/:id',cntrl.put)
router.delete('/:id', cntrl.deleteById)

module.exports = router;