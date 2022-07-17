const messageErrorMissingFields = { status: 400, message: 'Some required fields are missing' }

const messageErrorInvalidFields = { status: 400, message: 'Invalid fields' }

const messageErrorToken = { status: 401, message: 'Token not found' }

const messageErrorTokenInvalid = { status: 401, message: 'Expired or invalid token' }

module.exports = {
  messageErrorMissingFields,
  messageErrorInvalidFields,
  messageErrorToken,
  messageErrorTokenInvalid
}