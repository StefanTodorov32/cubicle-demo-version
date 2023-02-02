const { login } = require("../services/userService");

const router = require("express").Router();


router.get("/login", (req, res) => {
    res.render('login')
});

router.post('/login', async (req, res)=>{
    const {username, password} = req.body
    const result = await login({username, password})
    const token = req.signJwt(result)
    res.cookie('jwt', token)
    res.redirect('/')
})
module.exports = router;
