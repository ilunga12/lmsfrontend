import React, { useEffect, useState } from 'react'
import Teachersidebar from './Teachersidebar'
import axios from 'axios'

const baseurl='http://127.0.0.1:8000'
function Courceadd() {
    const [cate, setcate] = useState([]);
    const [coursedata, setcourse] = useState(
        {
            category:"",
            title:"",
            description:"",
            featured_img:"",
            technology:""
        }
    )
    useEffect(() => {
        try {
            axios.get(baseurl+'/CategoryList/').then((res)=>{
                
                    // console.log(res.data)
                    setcate(res.data)
                
            })
        }
        catch(error){
            console.log(error)
        }
    }, [])
    

    const handleChange = (event) => {
        setcourse({
            ...coursedata,
            [event.target.name]:event.target.value
        })
    }

    const handleFileChange = (event) => {
        setcourse({
            ...coursedata,
            [event.target.name]:event.target.files[0]
        })
    }
    const formSubmit = () =>{
        //     const _formData = new FormData()
        //     _formData.append('category',coursedata.category)
        //     _formData.append('teacher',coursedata,1)
        //     _formData.append('title',coursedata.title)
        //     _formData.append('description',coursedata.description)
        //     _formData.append('featured_img',coursedata.featured_img)
        // }
        // try {
        //     axios.post(baseurl+'/course/',_formData,{
        //         headers: {
        //             "content-type":"multipart/form-data"
        //         }
        //     })
        //     .then((res)=>{console.log(res.data)})
        // }catch(error){
        //     console.log(error)
        }
    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                <Teachersidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Course</h5>
                        <div className='card-body'>
                            <div className="mb-3">
                                <label for="exampleTitle" className="form-label">Categoty</label>
                                <select className="form-select" name='category' onChange={handleChange} aria-label="Default select example">
                                    {cate.map((category,index)=>{return<option key={index} value={category.id}>{category.title}</option>})}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="exampleTitle" className="form-label">Title</label>
                                <input type="text" name='title' onChange={handleChange} className="form-control" id="exampleTitle" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea className="form-control" name='description' onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Course Video</label>
                                <input className="form-control" type="file" name='featured_img' onChange={handleFileChange} id="formFile"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea2" className="form-label">Technologies</label>
                                <textarea class="form-control" name='technology' onChange={handleChange} id="exampleFormControlTextarea2" rows="3"></textarea>
                            </div>
                            <button type='button' onClick={formSubmit} className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}       
  

export default Courceadd