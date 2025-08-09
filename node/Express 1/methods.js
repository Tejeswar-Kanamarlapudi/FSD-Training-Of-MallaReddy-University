import express from "express";

const app = express()

// app.get('/student',(req,res)=>res.send('Get Students Data'));
// app.post('/student',(req,res)=>res.send('Create Student ID'));
// app.put('/student',(req,res)=>res.send('Update Student ID'));
// app.delete('/student',(req,res)=>res.send('Delete Student ID'));

app
.route('/student')
.get((req,res)=>res.send('Get Students Data'))
.post((req,res)=>res.send('Create Student ID'))
.put((req,res)=>res.send('Update Student ID'))
.delete((req,res)=>res.send('Delete Student ID'));

export default app;