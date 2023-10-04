const express = require("express");
const router = express.Router();
const cntrl = require('../../helpers/contrl')


router.get('/', cntrl.add)
router.get('/:id', cntrl.getById)
router.post('/', cntrl.post)
router.put('/:id',cntrl.put)
router.delete('/:id', cntrl.deleteById)

module.exports = router;