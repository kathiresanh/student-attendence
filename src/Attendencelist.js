import React  from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Attendencelist(){
     let params=useParams()

     const [attendence,setAttendence] = useState([])

     useEffect(async ()=>{
       let attendData = await fetch(`https://619856c0164fa60017c23011.mockapi.io/attendence?userid=${params.id}`)
       let attend = await (attendData.json())
       setAttendence(attend)
     })
    return(<>
    <div><span><h1>Attendence-List</h1></span><span><Link to={`/addAttendence/${params.id}`}><button type="button" class="btn btn-primary btn-sm">Add Attendence</button></Link> </span></div>  
       <table class="table">
  <thead>
    <tr>
      <th scope="col">Number</th>
      <th scope="col">present/absent</th>
      <th scope="col">Date</th>
 
    </tr>
  </thead>
  <tbody>
      { 
     
     attendence.map((obj,index)=>{
        return <tr>
        <th scope="row">{index+1}</th>
        <td>{obj.attendence}</td>
        <td>
        {obj.date}
        </td>
        
      </tr>  
      })
      
      }

  </tbody>
</table>
    
    </>);
}