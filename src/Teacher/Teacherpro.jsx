import React from 'react'
import Teachersidebar from './Teachersidebar'


function Teacherpro() {
  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
            <Teachersidebar/>
        </aside>
        <section className='col-md-9'>
            <div className='card'>
                <h5 className='card-header'>My Profile</h5>
                <div className='card-body'>
                    <div class="mb-3 row">
                        <label for="staticName" class="col-sm-2 col-form-label">Full Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="staticName"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="staticEmail"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="formFile" class="col-sm-2 col-form-label">Profile Photo</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="file" id="formFile"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputInterests" class="col-sm-2 col-form-label">Skills</label>
                        <div class="col-sm-10">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <div className='form-text'>Python,Html,Css etc</div>
                        </div>
                    </div>
                    <hr/>
                    <button className='btn btn-primary'>Update</button>
                </div>
            </div>
        </section>
    </div>
</div>
)
  }


export default Teacherpro