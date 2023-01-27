const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const AccessorySchema = new Schema({
      name: {
            type: String,
            required: true
      },
      imageUrl:{
            type: String,
            required: true
      },
      description:{
            type: String,
            required: true,
            maxLength: 50
      }
})

const Accessory = model('Accessory', AccessorySchema)
module.exports = Accessory