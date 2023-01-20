const { getCubes } = require("../services/cobicleService");

const router = require("express").Router();

router.get("/", (req, res) => {
  const cubes = getCubes();
  res.render("catalog", {cubes});
});

router.get("/about", (req, res) => {
  res.render("about");
});
module.exports = router;
