const Joi = require('joi')

let objectShema = Joi.object({
    email: Joi.string().required(),
    phone: Joi.string().required(),
    name: Joi.string().required()
})

const contacts = require('../db/contactsL')

const add = async(req , res, next) => {
     try {
        let allContacts = await contacts.listContacts()
        res.json(allContacts)
        
    } catch(error) {
        res.status(500).json
            ({ message: 'Server error' })
    }
}

const getById = async (req, res, next) => {
     let id = req.params.id
    try {
        let contact = await contacts.getContactById(id)
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
        const result = await contacts.addContact(req.body)
        res.json(result)
    } catch(err) {
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
        let result = await contacts.updateContactById(id, req.body)
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
        let result = await contacts.removeContact(id)
        console.log(result)
        if (!res) {
            throw HttpError(400,error.message)
        }
        res.json(result)
        
    } catch (err) {
        next(err)
    }
}


module.exports = {
    add,
    getById,
    post,
    put,
    deleteById
}
