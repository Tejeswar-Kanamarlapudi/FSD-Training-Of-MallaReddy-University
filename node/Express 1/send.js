// Send JSON in Response
import express from "express";

const app = express()

app.get('/user/product/:category',(req,res)=>{
    const {category} = req.params
    const {quantity} = req.query
    const user = {
        name: "Ravi Shankar",
        id: 21,
        city: "Bhuvaneswar",
        category: category,
        quantity: quantity
    }
    res.json(user)
})

export default app;