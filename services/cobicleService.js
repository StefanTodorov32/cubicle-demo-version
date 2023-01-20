const fs = require("fs");

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
module.exports ={
      getCubeById,
      getCubes
}
