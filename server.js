const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mysql = require("mysql")


const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "curd"
})

app.get('/table', (req,res)=>{
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data)=>{
        if(err) return res.json("Error In DATABASE");
        return res.json(data)
    })
})

app.post('/create', (req, res) => {  
    const sql = "INSERT INTO student (`Name`, `Email`, `Remark`) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.remark 
    ];
  
    db.query(sql, values, (err, data) => {
        if (err) return res.json("Error In Insert");
        return res.json(data);
    });
  });
  

app.listen(5000,()=>{
    console.log('Server Running Successfully in http://localhost:5000/');
})
