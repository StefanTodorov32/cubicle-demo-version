const dataDB = require('../models/data')
const fs = require('fs')
const path = require('path')
class Cube {
  constructor(name, description, image, difficulty) {
    this.name = name;
    this.image = image;
    this.difficulty = difficulty;
    this.description = description;
  }
  static save(cube){
    dataDB.push(cube.name)
    const jsonData = JSON.stringify(dataDB, null, 2)
    fs.writeFileSync(path.resolve(__dirname, '../models/data.json'), jsonData)
  }
}
module.exports = Cube