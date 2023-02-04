const Cube = require("../models/Cube");
const jwt = require("../lib/jwt");
const config = require("../config/indexes");
const User = require("../models/User");
const createCube = async (req, res) => {
  const user = await User.findOne({ username: req.user.username });
  let creatorId = user._id;
  const { name, description, imageUrl, difficultyLevel } = req.body;
  let cube = new Cube({
    name,
    description,
    imageUrl,
    difficultyLevel,
    creatorId,
  });
  await cube.save();
  res.redirect("/");
};
const getCubes = async (req, res) => {
  let cubes = await Cube.find().lean();
  res.render("catalog", { cubes });
};
const getCubeById = async (req, res) => {
  const cubeId = req.params.id;
  let cube = await Cube.findById(cubeId).populate("accessories").lean();
  res.render("details", { cube });
};
const getOneCube = async (cubeId) =>{
  const cube = await Cube.findById(cubeId).lean()
  return cube
}

module.exports = { createCube, getCubes, getCubeById, getOneCube };
