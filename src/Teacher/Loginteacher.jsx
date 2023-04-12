import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseurl =' http://127.0.0.1:8000/LoginView/'
function Loginteacher() {
    const [teacherLoginData, setteacherLoginData] = useState
    ({
        email:"",
        password:""
    })
    const handleChange=(event)=>
    {setteacherLoginData
        ({
            ...teacherLoginData,
            [event.target.name]:event.target.value
        })
    }
    useEffect(() => 
    {
        document.title = 'Teacher Login'
    }, [])
    const submitForm=()=>
    {
        const teacherFormData=new FormData()
        teacherFormData.append('email',teacherLoginData.email)
        teacherFormData.append('password',teacherLoginData.password)
        try
        {
            axios.post(baseurl,teacherFormData).then((response)=>
            {
                console.log(response.data)
                if(response.data.bool===true)
                {
                    localStorage.setItem('teacherLoginStatus',true)
                    window.location.href="/teacherboard"
                }
            })
        }
        catch(error)
        {
            console.log(error)
        }
        // const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
        // if (teacherLoginStatus === 'true'){
        //     window.location.href="/teacherboard"
        // }
      }
    
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card'>
                    <h5 className='card-header'>Sign in</h5>
                    <div className='card-body'>
                        {/* <form> */}
                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Username</label>
                                <input type="text" className="form-control" onChange={handleChange} value={teacherLoginData.email} name="email" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" onChange={handleChange} value={teacherLoginData.password} name="password"  id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" onClick={submitForm} className="btn btn-primary">Login</button>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
  

export default Loginteacher