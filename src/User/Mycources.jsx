import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'


function Mycources() {
  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
            <Sidebar />
        </aside>
        <section className='col-md-9'>
            <div className='card'>
                <h5 className='card-header'>My Courses</h5>
                <div className='card-body'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>CourseName</th>
                                <th>Created By</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Reactjs</td>
                                <td><Link to=''>Abhijith</Link></td>
                                <td><button className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</div>
)
}

export default Mycources