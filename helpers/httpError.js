let HttpError = (status,message) => {
    let error = new Error(message)
    error.status = status
    console.log('s')
    return error
}

module.exports =  HttpError  