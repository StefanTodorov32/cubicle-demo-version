const { getCubes, getSearchCube } = require("../services/cobicleService");

const router = require("express").Router();

router.get("/", (req, res) => {
  const cubes = getCubes();
  res.render("catalog", {cubes});
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.post('/', (req, res)=>{
  const {search, from , to} = req.body
  const cubes = getSearchCube(search, from , to)
  if (cubes.length == 0) {
    res.render("404")
  }else{
    res.render("catalog", {cubes});
  }

})
module.exports = router;
