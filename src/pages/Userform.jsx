import React, { useState } from 'react'
import Input from '../components/Inputdata'
import Preview from '../components/Preview'




function Userform() {
 const [resumeData,setResumeData]=useState({

    name:"",
    jobTitle:"",
    location:"",
    email:"",
    phone:"",
    github:"",
    linkedIn:"",
    course:"",
    university:"",
    passout:"",
    skills:[],
    summary:""

  })

  return (
    <div className='row p-5'>
      <div className='col-md-6'>
  <Input resumeData={resumeData} setResumeData={setResumeData}/>
      </div>
      <div className='col-md-6'>
      {
        resumeData?.name &&
          <Preview resumeData={resumeData}/>
      }
      </div>
     
    </div>
  )
}

export default Userform