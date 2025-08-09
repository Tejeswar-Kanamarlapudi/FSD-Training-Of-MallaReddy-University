import express from "express";
import mysql from "mysql2"

const app= express()
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "project1" 
})

app.get('/',(req,res)=>{
    res.json('Hello it is Backend')
})

app.get('/books',(req,res)=>{
    const q = "SELECT * FROM books";
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/books',(req,res)=>{
    const q = "INSERT INTO books(`title`,`desc`,`price`,`cover`) VALUES(?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]
    db.query(q,[values],(err,data)=>{
        if(err) res.json(err)
        return res.json(data);
    })
});


const PORT = 8000

app.listen(PORT,()=>{
    console.log('Server running at http://localhost:8000');
})