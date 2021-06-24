//jshint esversion:6
const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "6363@Mrk",
    database: "proctordb",
});


app.use(cors());
app.use(express.json());

app.get("/studinformation", (req,res)=> {
     
      const sqlselect = "select * from studinfo" ;
      db.query(sqlselect, (err, result)=>{
        res.send(result);
      });
});

app.listen(3000,() =>{
    
    console.log("server is up and running");
}); 