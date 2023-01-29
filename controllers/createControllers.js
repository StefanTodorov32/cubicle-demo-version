const {
    createAccessory,
    getAttachAccessory,
    postAttachAccessory,
} = require("../services/accessoryService");
const { createCube } = require("../services/cubeService");

const router = require("express").Router();

// Cube Routes
router.get("/cube", (req, res) => {
    res.render("create");
});
router.post("/cube", createCube);

// Accessory Routes
router.get("/accessory", (req, res) => {
    res.render("createAccessory");
});
router.post("/accessory", createAccessory);
router.get("/accessory/:id", getAttachAccessory);
router.post("/accessory/attach/:id", postAttachAccessory);

module.exports = router;
