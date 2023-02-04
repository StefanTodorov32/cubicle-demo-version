const catalogControllers = require("../controllers/catalogControllers");
const createController = require("../controllers/createControllers");
const detailesController = require("../controllers/detailesController");
const aboutController = require("../controllers/aboutControllers");
const authController = require("../controllers/authController");
const notFound = require("../controllers/notFound");
const {isAuthenticated} = require('../middlewares/auth')
module.exports = (app) => {
  app.use("/", catalogControllers);
  app.use("/create",isAuthenticated, createController);
  app.use("/about", aboutController);
  app.use("/details", detailesController);
  app.use("/auth", authController);
  app.all("*", notFound);
};
