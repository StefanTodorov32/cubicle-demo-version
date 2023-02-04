const express = require("express");
const exphbs = require("express-handlebars").create({
    extname: ".hbs",
});
const routesConfig = require('./config/routes')
const cookieParser = require('cookie-parser')
const initDb = require("./config/db");
const auth = require('./middlewares/auth')

const config = require('./config/indexes');


async function start() {
    const app = express();

    await initDb()
    app.engine(".hbs", exphbs.engine);
    app.set("view engine", ".hbs");

    app.use(express.urlencoded({ extended: true }));
    app.use("/static", express.static("static"));
    app.use(cookieParser());
    app.use(auth.authentecation)
    routesConfig(app)

    app.listen(3002, ()=> console.log('Server running on http://localhost:3002'))

}

start()