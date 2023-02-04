const jwt  = require('jsonwebtoken')
const util = require('util')

const jwtFunctions = {
    sign: util.promisify(jwt.sign),
    verify: util.promisify(jwt.verify)
}

module.exports = jwtFunctions