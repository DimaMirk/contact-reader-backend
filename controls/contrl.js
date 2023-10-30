const Contact = require('../models/contact')

const { HttpError } = require('../helpers')
const { CtrlWrapper } = require('../helpers')

const all = async (req, res) => {
    const { _id: owner } = req.user
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    let allContacts = await Contact.find({ owner }, "-updateAt", { skip, limit}).populate("owner", "name email")
    res.json(allContacts)    
}

const getById = async (req, res) => {
    let id = req.params.id
    let contact = await Contact.findById(id)

    if (!contact) {
        throw HttpError(404,'Not found')
    }
    res.json(contact)
}

const post = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await Contact.create({...req.body,owner})
    res.status(201).json(result)
}

const put = async (req, res) => {
    let id = req.params.id
    let result = await Contact.findByIdAndUpdate(id, req.body, { new: true })
    if (!result) {
        throw HttpError(404,'Not found')
    }
    res.json(result)
}

const deleteById = async (req, res) => {
    const { id } = req.params
    let result =  await Contact.findByIdAndDelete(id)
    if (!result) {
        throw HttpError(400, error.message)
    }
    res.json(result)
}


module.exports = {
    all:CtrlWrapper(all),
    getById:CtrlWrapper(getById),
    post:CtrlWrapper(post),
    put:CtrlWrapper(put),
    deleteById:CtrlWrapper(deleteById)
}
