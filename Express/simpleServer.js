const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello I am learning Express')
})

app.get('/profile', function (req, res) {
    res.send('Hello from profile route')
  })
app.listen(3000)