//Route Parameters
import express from "express";

const app = express()

//parameters -> :
app.get('/product/:category',(req,res)=>{
    const {category} = req.params
    res.send(`Product Category is -> ${category}`)
})

app.get('/order/:date/:month/:year',(req,res)=>{
    const {date , month, year} = req.params
    res.send(`Product order date: ${date} / ${month} / ${year}`)
})

export default app;
