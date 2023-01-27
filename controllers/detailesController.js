const router = require("express").Router();
const { getCubeById } = require("../services/cubeService");

router.get("/:id", getCubeById)
module.exports = router;
