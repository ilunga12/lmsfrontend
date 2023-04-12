import React from 'react'
import Teachersidebar from './Teachersidebar'

function Dashteacher() {
  return (
<div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Teachersidebar/>
                </aside>
                <section className='col-md-9'>
                    Dashboard
                </section>
            </div>

        </div>
    )
}

export default Dashteacher