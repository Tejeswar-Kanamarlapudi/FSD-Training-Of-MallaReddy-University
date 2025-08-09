import React from 'react'
import { useParams } from 'react-router-dom'

const studentData = {
    '1' : {name:'tej',age:26,course:'B.Tech'},
    '2' : {name:'eswar',age:25,course:'B.E'},
    '3' : {name:'Subbarao',age:24,course:'B.Arch'},
    '4' : {name:'Venky',age:28,course:'B.Tech'}
};

function StudentDetail() {
  const {id} = useParams();
  const student = studentData[id];
  
  if(!student){
    return <h2>Student Data Not Found</h2>
  }
  
  return (
    <div>
        <h2>Student Details</h2>
        <p><strong>{student.name}</strong></p>
        <p><strong>{student.age}</strong></p>
        <p><strong>{student.course}</strong></p>
    </div>
  )
}

export default StudentDetail
