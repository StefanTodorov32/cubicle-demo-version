const router = require("express").Router();
const Cube = require('../models/Cube')
router.get('/', (req, res)=>{
      res.render('create')
})
router.get('/accessory', (req, res)=>{
      res.render('createAccessory')
})
router.get('/accessory/:id', (req, res)=>{
      res.render('attachAccessory')
})
router.post('/', (req,res)=>{
      req.body.difficultyLevel = Number(req.body.difficultyLevel)
      let cube = new Cube(req.body)
      console.log(req.body);
      Cube.save(cube)
      res.redirect('/')
})

module.exports = router