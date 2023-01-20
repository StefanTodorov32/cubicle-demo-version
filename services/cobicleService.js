const fs = require("fs");
const cubeDB = require('../models/data.json')
const path = "./models/data.json";
const data = JSON.parse(fs.readFileSync(path));

function getCubes() {
  return data;
}
function getCubeById(id) {
  return data.find(i => i.id == id);
}
async function persist(){
      return new Promise((res, rej)=>{
            fs.writeFile(path,JSON.stringify(data), (err)=>{
                  if (err == null) {
                        res()
                  }else{
                        rej(err)
                  }
            })
      })
}
function getSearchCube(searchTerm,fromDiff, toDiff){
      const result =  cubeDB.filter(cubes => cubes.name.toLowerCase().includes(searchTerm))
      if (result.difficultyLevel >toDiff || result.difficultyLevel < fromDiff) {
            return
      }else{
            console.log(result)
            return result
      }
}
module.exports ={
      getCubeById,
      getCubes,
      getSearchCube
}
