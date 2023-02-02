const { login, getUserByUsername, register } = require("../services/userService");

const router = require("express").Router();


router.get("/login", (req, res) => {
    res.render('login')
});

router.post('/login', async (req, res)=>{
    const {username, password} = req.body
    try{

        const result = await login({username, password})
    }catch(e){
        console.error(e)
        return res.redirect('/auth/login')
    }
    res.redirect('/')

})

router.get('/register', (req, res)=>{
    res.render('register')
})

router.post('/register', async (req, res)=>{
    const {username, password, repeatPassword} = req.body;
    if (password !== repeatPassword) {
        return res.redirect('404')
    }
    const existingUser = await getUserByUsername(username)

    if (existingUser) {
        return res.redirect('404')
    }
    const user = await register({username, password})
    res.redirect('/auth/login')

})
module.exports = router;
