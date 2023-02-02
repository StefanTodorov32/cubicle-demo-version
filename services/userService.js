const jwt = require("jsonwebtoken");

async function login({ username, password }) {
    return new Promise((res, rej) => {
        if (username.toLowerCase() == "peter" && password == "123456") {
            res({
                _id: "1h23kjbnlnasdfh",
                username: "peter",
                roles: ["user"],
            });
        } else {
            rej(new Error("Incorrect Username or password"));
        }
    });
}
module.exports = { login };
