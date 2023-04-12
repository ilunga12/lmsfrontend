import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BaseUrl='http://127.0.0.1:8000/'
function Featuredteachers() {
    const [Teacher, setTeacher] = useState(null)
    useEffect(() => {
        axios.get(BaseUrl+'teachers/').then((response)=>{setTeacher(response.data)})

    }, [])
    console.log(Teacher)
    
  return (
    <div className='container mt-4'>
    {/* Latest Courses */}
    <h3 className='pb-1 mb-4'>Popular Teachers</h3>
    <div className='row'>
        
        <div className='col-md-3'>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><Link to='/teacherdetail/1'>Teacher Name</Link></h5>
                </div>
            </div>
        </div>
    </div>
    {/* end of latest Courses */}
    {/* Pagination Start */}
    <nav aria-label="Page navigation example" style={{ marginTop: '25px' }}>
        <ul className="pagination justify-content-center">
            <li className="page-item"><Link class="page-link" to="#">Previous</Link></li>
            <li className="page-item"><Link class="page-link" to="#">1</Link></li>
            <li className="page-item"><Link class="page-link" to="#">2</Link></li>
            <li className="page-item"><Link class="page-link" to="#">3</Link></li>
            <li className="page-item"><Link class="page-link" to="#">Next</Link></li>
        </ul>
    </nav>
    {/* End of pagination */}
</div>
)
}
  

export default Featuredteachers