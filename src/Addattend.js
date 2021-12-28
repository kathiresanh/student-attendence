import React from "react";
import { useFormik } from "formik";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Addattend(){
    let navigate = useNavigate()
    let params = useParams()
    const formik = useFormik({
        initialValues: {
            attendence:"",
            date:"",
            userid:params.id,
        },
        onSubmit: async values => {
            try{
             await fetch("https://619856c0164fa60017c23011.mockapi.io/attendence",{
                method :"POST",
                body : await JSON.stringify(values),
                headers :{
                    "Content-type" : "application/json"
                  }
             })
             navigate(`/attendence/${params.id}`)
            }
            catch(error){
             console.log(error)
            }
        },
    });
    return (<>
         <h1>Add-Attendence</h1>
         <div className="container">
             <form onSubmit={formik.handleSubmit}>
             <div className="row">
                 <div className="col-lg-6">
                     <select name="attendence" class="form-control" onChange={formik.handleChange}
                value={formik.values.attendence} required>
                     <option > -- select an option -- </option>
                          <option value="present">Present</option>
                          <option value="absent">Absent</option>
                         
                     </select>

                 </div>
                 <div className="col-lg-6">
                    <input type="date" name="date" className="form-control" onChange={formik.handleChange}   value={formik.values.date} required ></input>
                 </div>
                 <div className="col-lg-6 mt-3">
                    <input type="submit" className="btn btn-primary btn-sm"></input>
                 </div>
             </div>
             </form>
         </div>
    </>)
}