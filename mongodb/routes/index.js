var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/create', async function (req, res) {
  const createdUser = await userModel.create({
    username: "princeyadav18",
    age: 23,
    name: "Prince Yadav"
  })
  res.send(createdUser)
})

router.get('/allusers', async function(req, res){
  let allUsers=await userModel.find()
  res.send(allUsers)
})

router.get('/user',async function(req, res){
  let user=await userModel.findOne({username:"princeyadav18"})
  res.send(user)
})

router.get('/delete',async function(req,res){
  let deletedUser=await userModel.findOneAndDelete({username:"princeyadav18"})
  res.send(deletedUser)
})
module.exports = router;
