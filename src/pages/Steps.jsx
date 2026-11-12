import React from 'react'
import { IoIosDownload } from 'react-icons/io'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'



function Steps() {
  return (
    <>
    <div className='container-fluid'>
   <h1 className='mt-3 text-center'>Create a Job Winning Resume in Minutes</h1>
    <div className='row justify-content-center align-items-center my-5'>
    <div className='col-md-4 border shadow p-5 text-center'>
      <IoDocumentTextOutline className='text-primary fs-1'/>
      <h3 className='mt-3'>Add Your Information</h3>
      <p>Add pre-written examples to each section</p>
      <h5>STEP 1</h5>
        
    </div>

    <div className='col-md-1'></div>
      <div className='col-md-4 border shadow p-5 text-center'>

      <IoIosDownload className='text-danger fs-1'/>
      <h3 className='mt-3'>Download Your Resume</h3>
      <p>Download and Start Applying</p>
      <h5>STEP 2</h5>
    </div>
    </div>
    <div className='text-center my-3'>
      <Link to={'/userform'} className='btn btn-dark'>LET'S START</Link>
    </div>
    </div>
    </>
  )
}

export default Steps