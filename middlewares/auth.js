const jwt = require("../lib/jwt");
const config = require("../config/indexes");

async function authentecation(req, res, next) {
  const token = req.cookies["auth"];
  if (token) {
    try {
      const decodedToken = await jwt.verify(token, config.secret);
      req.user = decodedToken;
      req.isAuthenticated = true
    } catch (e) {
      console.error(e);
      res.clearCookie("auth");
      res.redirect("/404");
    }
  }
  next();
}
function isAuthenticated(req, res, next){
    if (!req.isAuthenticated) {
        res.redirect('/login')
    }
    next()
}
module.exports = { authentecation,isAuthenticated };
