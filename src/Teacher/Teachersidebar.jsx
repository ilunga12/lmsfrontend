import React from 'react'
import { Link } from 'react-router-dom'

function Teachersidebar() {
  return (
    <div className='card'>
    <div className='list-group list-group-flush'>
        <Link to="/teacherboard"  className='list-group-item list-group-item-action'>Dashboard</Link>
        <Link to='/teachercourses' className='list-group-item list-group-item-action'>My Courses</Link>
        <Link to='/add-course' className='list-group-item list-group-item-action'>Add Course</Link>
        <Link to='/teacherusers' className='list-group-item list-group-item-action'>My Users</Link>
        <Link to='/teacherprofile' className='list-group-item list-group-item-action'>Profile Setting</Link>
        <Link to='/resetpassword' className='list-group-item list-group-item-action'>Change Password</Link>
        <Link to='/' className='list-group-item list-group-item-action text-danger'>Logout</Link>
    </div>
</div>
)
}
 

export default Teachersidebar