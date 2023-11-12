// export { default as isEmptyBody } from "./isEmptyBody.js";
const isValidId = require("./isValidId.js")
const validateBody = require('./validateBody.js')
const aunthentificate = require('./aunteficate.js')
const upload = require('./upload.js')

module.exports = {
    validateBody,
    isValidId,
    aunthentificate,
    upload
}