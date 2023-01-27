const Cube = require("../models/Cube");

const createCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    let cube = new Cube({ name, description, imageUrl, difficultyLevel });
    await cube.save();
    res.redirect("/");
};
module.exports = { createCube };
