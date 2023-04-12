import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BaseUrl='http://127.0.0.1:8000/'
function New() {
    const [Teacher, setTeacher] = useState(null)
    useEffect(() => {
        axios.get(BaseUrl+'teachers/').then((response)=>{setTeacher(response.data)})

    }, [])
    console.log(Teacher)
  return (
    
        <div>
           {setTeacher.map((demo)=>{return( <div>
        {demo.name},
        {demo.id}
       </div> )})}
       </div>
        
  )
}

export default New