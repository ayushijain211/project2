const express=require('express')
const app=express()
app.get('/username',function(req,res){
    console.log("server has started");
    res.send(' the profile  is of ${req.params.username}')
})
app.listen(8086)