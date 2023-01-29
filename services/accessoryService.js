const Accessory = require("../models/Accessory");
const Cube = require("../models/Cube");

const createAccessory = async (req, res) => {
    const { name, description, imageUrl } = req.body;
    console.log(name, description, imageUrl);
    await Accessory({ name, description, imageUrl }).save();
    res.redirect("/");
};
const getAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.id).lean();
    const accessories = await Accessory.find().lean();
    res.render("attachAccessory", { cube, accessories });
};
const postAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.id)
    const accessoryId = req.body.accessory
    cube.accessories.push(accessoryId)
    await cube.save()
    res.redirect(`/details/${cube.id}`)
};
module.exports = { createAccessory, getAttachAccessory, postAttachAccessory };
