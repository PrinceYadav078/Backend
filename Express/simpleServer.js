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
app.listen(3000)