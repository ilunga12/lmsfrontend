import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseurl='http://127.0.0.1:8000/Student_reg/'
function Userreg() {
    const [studentData,setstudentData] = useState({
        'full_name':'',
        'email':'',
        'password':'',
        'mobile_no':'',
        'qualification':'',
        'skills':'',
        'status':'success'
    })
    const handleChange = (event)=>{
        setstudentData({
            ...studentData,
            [event.target.name]:event.target.value
        })
    }

    const submitForm = (e)=>{
        e.preventDefault()
        const studentFormData = new FormData();
        studentFormData.append('full_name',studentData.full_name)
        studentFormData.append('email',studentData.email)
        studentFormData.append('password',studentData.password)
        studentFormData.append('mobile_no',studentData.mobile_no)
        studentFormData.append('qualification',studentData.qualification)
        studentFormData.append('skills',studentData.skills)

        try{
            axios.post(baseurl,setstudentData).then((response)=>{console.log(response.data)})
        }
        catch(error){
            console.log(error)
            setstudentData({
                'full_name':'',
                'email':'',
                'mobile_no':'',
                'password':'',
                'qualification':'',
                'skills':'',
                'status':'error'
            })
        }
    }
   
    useEffect(() => {
        document.title = 'Student Register'
      }, [])
  return (
    <div className='container mt-5'>
    {studentData.status=='success' && <p className='text-success'>Thanks for registering</p>}
    {studentData.status=='error' && <p className='text-danger'>something went wrong</p>}
    <div className='card'>
        <h5 className='card-header text-center'>Student Register Form</h5>
        <div className='card-body'>
    {/* <form> */}
        <div className="mb-3">
            <label for="exampleInputName" className="form-label">Username</label>
            <input type="text" onChange={handleChange} name="full_name" value={studentData.full_name} className="form-control" id="exampleInputName"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" onChange={handleChange} name="email" value={studentData.email} className="form-control" id="exampleInputEmail1"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" onChange={handleChange} name="password" value={studentData.password} className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputqualification" className="form-label">qualification</label>
            <input type="text" onChange={handleChange} name='qualification' value={studentData.qualification} className="form-control" id="exampleInputqualification"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputmobile" className="form-label">Mobile Number</label>
            <input type="number" onChange={handleChange} name='mobile_no' value={studentData.mobile_no} className="form-control" id="exampleInputmobile"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputskill" className="form-label">Skills</label>
            <textarea className='form-control' name='skills' onChange={handleChange} value={studentData.skills}></textarea>
            <div id="emailhelp" className='form-text'>Python,Html,Css etc</div>
        </div>
        <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button>
    {/* </form> */}
    </div>
    </div>
</div>
)
}

export default Userreg