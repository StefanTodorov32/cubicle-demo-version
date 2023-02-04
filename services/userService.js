const jwtFunctions = require("../lib/jwt");
const User = require("../models/User");
const config = require('../config/indexes');

const getUserByUsername = (username) => User.findOne({ username });

const register = ({ username, password }) =>
    User.create({ username, password });

const login = async ({ username, password }) => {
    const user = await getUserByUsername(username);
    
    if (user == null) {
        throw new Error("Invalid Password/Username")
    }

    const isValid = await user.validatePassword(password);

    if (!isValid) {
        throw new Error("Invalid Password/Username")
    }
    const payload = {
        username : user.username
    }
    const token = await jwtFunctions.sign(payload, config.secret, {expiresIn: '4h'})
    
    return token
};

module.exports = { register, getUserByUsername, login };
