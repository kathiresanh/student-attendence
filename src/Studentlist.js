import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";

export default function Studentlist(){

  let handleClick = (data)=>{
    alert(data)
  }

   const [students,setStudent] = useState([])
   useEffect(async ()=>{
     let studentData = await fetch("https://619856c0164fa60017c23011.mockapi.io/studentlist")
     let student = await ( studentData.json())
     setStudent([...student])
   })

    return(
        <>
      <div><span><h1>Student-List</h1></span><span><Link to="/addstudent"><button type="button" class="btn btn-primary btn-sm">Add Student</button></Link> </span></div>  
       <table class="table">
  <thead>
    <tr>
      <th scope="col">Roll.No</th>
      <th scope="col">Name</th>
      <th scope="col">view</th>
 
    </tr>
  </thead>
  <tbody>
      { 
     
          students.map((obj,index)=>{
            return <tr>
            <th scope="row">{index+1}</th>
            <td>{obj.name}</td>
            <td>
           <Link to={`/attendence/${obj.id}`}>   <button type="button"  class="btn btn-primary btn-sm">View</button></Link>
            </td>
            
          </tr>  
          })
      }

  </tbody>
</table>
        </>
    )
}