const { createCube } = require("../services/cobicleService");

const router = require("express").Router();

router.get("/cube", (req, res) => {
    res.render("create");
});
router.get("/accessory", (req, res) => {
    res.render("createAccessory");
});
router.get("/accessory/:id", (req, res) => {
    res.render("attachAccessory");
});
router.post("/cube", createCube);

module.exports = router;
