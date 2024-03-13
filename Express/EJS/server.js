const express= require('express');
const app= express();

app.set("view engine", "ejs")
app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.render("login")
})

app.get('/about',(req,res)=>{
    res.render("about", {age:25})
})

app.get('/error',(req,res)=>{
    throw Error("Sorry! Page not found")
})

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })


app.listen(5000);