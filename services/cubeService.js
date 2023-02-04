const Cube = require("../models/Cube");
const jwt = require('../lib/jwt')
const config = require('../config/indexes')
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
const getCubeById = async(req, res)=>{
  const cubeId = req.params.id
  let cube = await Cube.findById(cubeId).populate('accessories').lean()
  res.render("details", {cube})
}


module.exports = { createCube, getCubes, getCubeById };
