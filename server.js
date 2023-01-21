const express = require("express");
const exphbs = require("express-handlebars").create({
  extname: ".hbs",
});

const catalogControllers = require("./controllers/catalogControllers");
const createController = require("./controllers/createControllers")
const detailesController = require('./controllers/detailesController')
const notFound = require("./controllers/notFound");

const app = express();

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("static"));
app.use(express.urlencoded({extended:false}))
app.use('/create', createController)
app.use(catalogControllers)
app.use(detailesController)



app.all('*', notFound)
app.listen(3002, () => console.log("Server is running on http://localhost:3002..."));