const express=require('express')
const mysql=require('mysql2')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'aits-rajampet'
})
db.connect(function(error){
    if(error){
        console.log("connection unsec");
        return;
    }
else{
    console.log("connection sucessfull");
   }
})
app.get('/get-users',function(req,res){
    db.query('SELECT* FROM employees',function(err,results){
        res.json(result);
    })
})
app.listen(8085)

