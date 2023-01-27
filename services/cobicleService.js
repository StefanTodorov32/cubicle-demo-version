const Cube = require("../models/Cube");

const createCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    let cube = new Cube({ name, description, imageUrl, difficultyLevel });
    await cube.save();
    res.redirect("/");
};
const getCubes = async (req, res) => {
    let cubes = await Cube.find().lean();
    res.render("catalog", { cubes });
};
module.exports = { createCube, getCubes };
