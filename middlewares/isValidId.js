// import { isValidObjectId } from "mongoose";
const { isValidObjectId } = require("mongoose")
const { HttpError } = require("../helpers")

const isValidId = (req, res, next) => {
  const { id } = req.params;
  console.log( req.params)
  if (!isValidObjectId(id)) {
    return next(HttpError(404, `${id} is not valid id`));
  }
  next();
};

module.exports = isValidId