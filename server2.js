const express=require('express')
const app=express()
app.get('/login',function(req,res){
     res.send("login products data")
})
app.get('/register',function(req,res){
    res.send("register products data")
})
app.listen(8086) 