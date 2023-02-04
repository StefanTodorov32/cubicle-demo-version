const router = require("express").Router();
const { getCubeById, getOneCube } = require("../services/cubeService");

function generatedDifficultyLevel(currentLevel) {
  const difficulty = [
    { key: 1, label: "1 - Very Easy", selected: false },
    { key: 2, label: "2 - Easy", selected: false },
    { key: 3, label: "3 - Medium (Standard 3x3)", selected: false },
    { key: 4, label: "4 - Intermediate", selected: false },
    { key: 5, label: "5 - Expert", selected: false },
    { key: 6, label: "6 - Hardcore", selected: false },
  ];

  const result = difficulty.map((x) =>
    x.key === currentLevel ? { ...x, selected: true } : x
  );
  return result;
}

router.get("/:id", getCubeById);
router.get("/:id/edit", async (req, res) => {
  const cube = await getOneCube(req.params.id);
  const difficultyLevels = generatedDifficultyLevel(cube.difficultyLevel);
  res.render("editCube", { cube, difficultyLevels });
});
router.get("/:id/delete", async (req, res) => {
  const cube = await getOneCube(req.params.id);
  const difficultyLevels = generatedDifficultyLevel(cube.difficultyLevel);
  res.render("deleteCube", { cube, difficultyLevels });
});
module.exports = router;
