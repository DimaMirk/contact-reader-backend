const Joi = require('joi')
let contactSchema = Joi.object({
    email: Joi.string().required(),
    phone: Joi.string().required(),
    name: Joi.string().required(),
    operator:Joi.string()
})

module.exports = {
    contactSchema
}