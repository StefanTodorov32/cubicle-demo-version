const mongoose = require("mongoose");

const hostDb = 'mongodb://127.0.0.1:27017/cubicledb'
async function initDb() {
      mongoose.set('strictQuery', false)
      await mongoose.connect(hostDb)

      console.log('Db connected')
}

module.exports = initDb
