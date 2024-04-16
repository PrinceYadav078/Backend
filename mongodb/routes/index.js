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

//Session cretion
router.get('/createsession',function(req,res){
  req.session.ban=true;
  res.send("session created succesfully")
})

//Session delete
router.get('/removesession', function(req, res){
  req.session.destroy(function(err){
    if(err){
      throw err;
    }
  })
  res.send("session deleted")
})

//session reading
router.get('/checksession', function(req, res){
  if(req.session.ban === true){
    res.send("You Are Banned");
  }else{
    res.send("You are not banned")
  }
})
module.exports = router;
