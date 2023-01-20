const fs = require("fs");
const cubeDB = require("../models/data.json");
const path = "./models/data.json";
const data = JSON.parse(fs.readFileSync(path));

function getCubes() {
  return data;
}
function getCubeById(id) {
  return data.find((i) => i.id == id);
}
async function persist() {
  return new Promise((res, rej) => {
    fs.writeFile(path, JSON.stringify(data), (err) => {
      if (err == null) {
        res();
      } else {
        rej(err);
      }
    });
  });
}
function getSearchCube(searchTerm, fromDiff, toDiff) {
  const result = cubeDB.filter((cubes) => {
    if (
      cubes.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      cubes.difficultyLevel >= Number(fromDiff) &&
      cubes.difficultyLevel <= Number(toDiff)
    ) {
      return cubes
    }
  });
  return result;
}
module.exports = {
  getCubeById,
  getCubes,
  getSearchCube,
};
