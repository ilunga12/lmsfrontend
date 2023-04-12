import React from 'react'
import Sidebar from './Sidebar'


function Profilesettings() {
  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
            <Sidebar
             />
        </aside>
        <section className='col-md-9'>
            <div className='card'>
                <h5 className='card-header'>Profile</h5>
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
                        <label for="inputInterests" class="col-sm-2 col-form-label">Interests</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputInterests"/>
                        </div>
                    </div>
                    <hr/>
                    <button class="btn btn-info">Update</button>
                </div>
            </div>
        </section>
    </div>
</div>
)
}


export default Profilesettings