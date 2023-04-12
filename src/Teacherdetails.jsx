import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Teacherdetails() {
    let {teacher_id} = useParams()
  return (
    <div className='container mt-3'>
    <div className='row'>
        <div className='col-4'>
            <img src="..." className="img-thumbnail" alt="..."/>
        </div>
        <div className='col-8'>
            <h3>course title</h3>
            <p>course description</p>
            <p className='fw-bold'>Skills:
            <Link to='/category/python'>Python</Link>,
            <Link to='/category/html'>Html</Link>,
            <Link to='/category/css'>Css</Link>
            </p>
            <p className='fw-bold'>Recent Courses:
            <Link to='/category/1'>Javascript</Link>  
            </p>
            <p className='fw-bold'>Rating:4/5</p>
        </div>
    </div>
    {/* course videos */}
    <div className='card mt-4'>
        <h5 className='card-header'>Course List</h5>
        <div className="list-group list-group-flush">
            <Link href='/detail/1' className='list-group-item list-group-item-action'>Python Course 1</Link>
            <Link href='/detail/1' className='list-group-item list-group-item-action'>Python Course 2</Link>
            <Link href='/detail/1' className='list-group-item list-group-item-action'>Reactjs Course 1</Link>
            <Link href='/detail/1' className='list-group-item list-group-item-action'>Reactjs Course 2</Link>
        </div>
    </div>
    {/* end of course videos */}
    <h3 className='pb-1 mb-4 mt-5'>Related Courses</h3>
    <div className='row'>
        <div className='col-md-3'>
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><Link to='/detail/1'>Card title</Link></h5>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default Teacherdetails