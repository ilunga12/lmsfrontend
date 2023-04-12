import axios from 'axios'
import React, { useEffect, useState } from 'react'
const baseurl='http://127.0.0.1:8000/teachers/'
function Regteacher() {
    const [teacherData, setteacherData] = useState({
        'full_name':'',
        'email':'',
        'password':'',
        'mobile_no':'',
        'qualification':'',
        'skills':'',
        'status':'success'
    })
    const handleChange = (event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        })
    }

    const submitForm = (e)=>{
        e.preventDefault()
        const teacherFormData = new FormData();
        teacherFormData.append('full_name',teacherData.full_name)
        teacherFormData.append('email',teacherData.email)
        teacherFormData.append('password',teacherData.password)
        teacherFormData.append('mobile_no',teacherData.mobile_no)
        teacherFormData.append('qualification',teacherData.qualification)
        teacherFormData.append('skills',teacherData.skills)

        try{
            axios.post(baseurl,teacherData).then((response)=>{console.log(response.data)
                if(response.data.bool===true)
                {
                    localStorage.setItem('teacherregisterStatus',true)
                    window.location.href="/teacherlogin"
                }})
        }
        catch(error){
            console.log(error)
            setteacherData({
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
        document.title = 'Teacher Register'
      }, [])
  return (
    <div className='container mt-5'>
        {teacherData.status=='success' && <p className='text-success'>Thanks for registering</p>}
        {teacherData.status=='error' && <p className='text-danger'>something went wrong</p>}
        <div className='card'>
            <h5 className='card-header text-center'>Teacher Register Form</h5>
            <div className='card-body'>
        {/* <form> */}
            <div className="mb-3">
                <label for="exampleInputName" className="form-label">Username</label>
                <input type="text" onChange={handleChange} name="full_name" value={teacherData.full_name} className="form-control" id="exampleInputName"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" onChange={handleChange} name="email" value={teacherData.email} className="form-control" id="exampleInputEmail1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" onChange={handleChange} name="password" value={teacherData.password} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputqualification" className="form-label">qualification</label>
                <input type="text" onChange={handleChange} name='qualification' value={teacherData.qualification} className="form-control" id="exampleInputqualification"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputmobile" className="form-label">Mobile Number</label>
                <input type="number" onChange={handleChange} name='mobile_no' value={teacherData.mobile_no} className="form-control" id="exampleInputmobile"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputskill" className="form-label">Skills</label>
                <textarea className='form-control' name='skills' onChange={handleChange} value={teacherData.skills}></textarea>
                <div id="emailhelp" className='form-text'>Python,Html,Css etc</div>
            </div>
            <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button>
        {/* </form> */}
        </div>
        </div>
    </div>
  )
}
 

export default Regteacher