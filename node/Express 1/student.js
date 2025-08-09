import express from "express";

const router = express.Router()

router.get('/all',(req,res)=> res.send('Get All Students Data'))
router.post('/create',(req,res)=> res.send('Create Student ID'))
router.put('/update',(req,res)=> res.send('Update Student ID'))
router.delete('/delete',(req,res)=> res.send('Delete Student ID'))

export default router;