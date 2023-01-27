const router = require("express").Router();
const { getCubeById } = require("../services/cobicleService");

router.get("/:id", getCubeById)
module.exports = router;
