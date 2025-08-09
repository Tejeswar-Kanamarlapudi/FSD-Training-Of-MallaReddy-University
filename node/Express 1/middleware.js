import express from "express";

const app = express()

app.param("id",(req,res,next,id)=>{
    console.log(`id: ${id}`);
    next();
})
app.get("/user/:id",(req,res)=>{
    console.log("This is User ID");
    res.send("Response OK");
})

export default app;