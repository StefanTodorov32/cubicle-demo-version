const jwt = require("jsonwebtoken");
const User = require("../models/User");

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

    return user;
};

module.exports = { register, getUserByUsername, login };
