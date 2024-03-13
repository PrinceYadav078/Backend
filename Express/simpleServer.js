const express = require('express')
const app = express()

//Middleware => it is a function which runs before route 
//if u want to do anything before routing then you can use middleware

app.use((req, res, next)=>{
    console.log("hello i am from middleware 1")
    next()
})

app.use((req, res, next)=>{
    console.log("hello i am from middleware 2")
    next()
})

app.get('/', function (req, res) {
  res.send('Hello I am learning Express')
})

app.get('/profile', function (req, res) {
    res.send('Hello from profile route')
  })

app.get('/contact',(req,res)=>{
  res.send("Hello from contact route")
})

//req=> req me data hota hai aane bale user ki request ki taraf ka 
//      like uski location ,device info and other things 

//res=> res me control hote hai jinke basis pe ham server se response send kar 
//      sakte hai 

// next=> next is just a push so that our request moves to the next thing which should be executed. 

// app.get('/contact/prince',(req,res)=>{
//   res.send("Hello from prince")
// })

// app.get('/contact/ganesh',(req,res)=>{
//   res.send("Hello from ganesh")
// })

// app.get('/contact/tushar',(req,res)=>{
//   res.send("Hello from tushar")
// })

//Route Parameters=> so istead of creating route for every user we can create dynamic route by using colon (:)
// and after that give name like username and to access that value use req.params.username
app.get('/contact/:username',(req,res)=>{
  res.send(`Hello from ${req.params.username}`)
})

app.listen(3000)