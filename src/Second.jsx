import React from 'react'
import { Link } from 'react-router-dom'


function Second() {
    return (
        <div className='container ms'>
          {/* Latest Courses */}
          <h3 className='pb-1 mb-4'>Latest Courses<Link to='/latestcourses' className='float-end'>see all</Link></h3>
          <div className='row'>
              <div className='col-md-3'>
                  <div className="card">
                      <img src="..." className="card-img-top" alt="..."/>
                      <div className="card-body">
                          <h5 className="card-title"><Link to='/detail/1'>Details</Link></h5>
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
          {/* Popular Courses */}
          <h3 className='pb-1 mb-4 mt-5'>Popular Courses<Link to='/popularcourses' className='float-end'>see all</Link></h3>
          <div className='row'>
              <div className='col-md-3'>
                  <div className="card">
                      <img src="..." className="card-img-top" alt="..."/>
                      <div className="card-body">
                          <h5 className="card-title"><Link href='#'>Details</Link></h5>
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
          {/* end of Popular Courses */}
          {/* Popular Teachers */}
          <h3 className='pb-1 mb-4 mt-5'>Featured Teachers<Link to='/popularteachers' className='float-end'>see all</Link></h3>
          <div className='row'>
              <div className='col-md-3'>
                  <div className="card">
                      <img src="..." className="card-img-top" alt="..."/>
                      <div className="card-body">
                          <h5 className="card-title"><Link to='#'>Details</Link></h5>
                      </div>
                  </div>
              </div>
          </div>
          {/* end of Popular teachers */}
          {/* student testimonial */}
          <h3 className='pb-1 mb-4 mt-5'>Student Testimonial</h3>
          <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5">
              <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                  <figure className='text-center'>
                      <blockquote className="blockquote">
                          <p>A well-known quote, contained in a blockquote element.</p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                          Someone famous in <cite title="Source Title">Source Title</cite>
                      </figcaption>
                  </figure>
                  </div>
                  <div className="carousel-item">
                  <figure className='text-center'>
                      <blockquote className="blockquote">
                          <p>A well-known quote, contained in a blockquote element.</p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                          Someone famous in <cite title="Source Title">Source Title</cite>
                      </figcaption>
                  </figure>
                  </div>
                  <div className="carousel-item">
                  <figure className='text-center'>
                      <blockquote className="blockquote">
                          <p>A well-known quote, contained in a blockquote element.</p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                          Someone famous in <cite title="Source Title">Source Title</cite>
                      </figcaption>
                  </figure>
                  </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
          {/* end of stuent testimonial */}
      </div>
        )
      }
      
 
 
export default Second