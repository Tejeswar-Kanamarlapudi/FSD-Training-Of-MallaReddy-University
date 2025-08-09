import express from "express";
// import app from "./methods.js";
// import student from "./student.js"
// import app from "./param.js"
// import app from "./query.js"
// import app from "./middleware.js"
import app from "./send.js"

// const app = express()
// app.use('/student',student)

const PORT = 8000
app.listen(PORT,()=>{
    console.log('Server running at http://localhost:8000');
})