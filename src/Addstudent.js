import React from "react";
import { useFormik } from 'formik';


export default function Addstudent() {

    const formik = useFormik({
        initialValues: {
            name:'',
        },
        onSubmit: async values => {
            try{
             await fetch("https://619856c0164fa60017c23011.mockapi.io/studentlist",{
                method :"POST",
                body : await JSON.stringify(values),
                headers :{
                    "Content-type" : "application/json"
                  }
             })
             alert("data saved")
            }
            catch(error){
             console.log(error)
            }
        },
    });

    return (
        <><form onSubmit={formik.handleSubmit}>
            <label class="form-label">Username</label><br></br>
            <input
                id="username"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name} required
            />
           
            <button class="btn btn-primary btn-sm" type="submit">submit</button>
        </form>
        </>
    );
}