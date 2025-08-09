import express from "express";

const app = express()

app.get('/login',(req,res)=>{
    const {username, password} = req.query
    res.send(`Username: ${username} && Password: ${password}`)
})

export default app;