const { getCubes, getSearchCube } = require("../services/cubeService");

const router = require("express").Router();

router.get("/", getCubes);



module.exports = router;
