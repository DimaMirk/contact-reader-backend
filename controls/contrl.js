const Contact = require('../models/contact')
const Joi = require('joi')

const HttpError = require('../helpers/httpError')
let objectShema = Joi.object({
    email: Joi.string().required(),
    phone: Joi.string().required(),
    name: Joi.string().required()
})

const all = async(req , res, next) => {
     try {
        let allContacts = await Contact.find()
        res.json(allContacts)
        
    } catch(error) {
        res.status(500).json
            ({ message: 'Server error' })
    }
}

const getById = async (req, res, next) => {
     let id = req.params.id
    try {
        let contact = await Contact.findById(id)
        if (!contact) {
            throw HttpError(404,'Not found')
        }
        res.json(contact)
        
    } catch (error) {
        next(error)
    }
}

const post = async (req, res, next) => {
    try {

        const { error } = objectShema.validate(req.body)
        if (error) {
            throw HttpError(400,error.message)
        }
        const result = await Contact.create(req.body)
        res.status(201).json(result)
    } catch (err) {
        next(err)
    }
}

const put = async (req, res, next) => {
    let id = req.params.id
    try {
        const { error } = objectShema.validate(req.body)
        if (error) {
            throw HttpError(400,error.message)
        }
       
        let result = await Contact.findByIdAndUpdate(id, req.body, { new: true })
        if (!result) {
            throw HttpError(404,'Not found')
        }
        res.json(result)

    } catch (err) {
        next(err)
    }
}

const deleteById = async (req, res, next) => {
      try {
        const { id } = req.params
        let result =  await Contact.findByIdAndDelete(id)
        if (!result) {
            throw HttpError(400, error.message)
        }
        res.json(result)
        
    } catch (err) {
        next(err)
    }
}


module.exports = {
    all,
    getById,
    post,
    put,
    deleteById
}
