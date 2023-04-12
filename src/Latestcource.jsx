import React from 'react'
import { Link } from 'react-router-dom'

function Latestcource() {
  return (
    <div className='container mt-4'>
    {/* Latest Courses */}
    <h3 className='pb-1 mb-4'>Latest Courses</h3>
    <div className='row'>
        <div className='col-md-3'>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><Link to='/detail/1'>Card title</Link></h5>
                </div>
                <div className='card-footer'>
                    <div className='title'>
                        <span>Rating:4.5/5</span>
                        <span className='float-end'>views: 78</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* end of latest Courses */}
    {/* Pagination Start */}
    <nav aria-label="Page navigation example" style={{marginTop:'25px'}}>
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
export default Latestcource