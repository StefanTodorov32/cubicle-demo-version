const router = require("express").Router();
const { getCubeById } = require("../services/cobicleService");

router.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const data = getCubeById(id);
  console.log(data);
  if (data) {
    res.render("details", { data });
  } else {
    res.render("404");
  }
});
module.exports = router;
