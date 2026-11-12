import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <>
    <section id='part1'>
    <div className="row">
    <div className='col-md-4'></div>
    <div className='col-md-4 box border text-center p-5 my-5 rounded' style={{backgroundColor:'rgba(255,255,255,0.3)'}}>
      <h1 className='mt-5' style={{fontFamily:'Dancing Script'}}>Designed to get  <br />hired.</h1>
      <h4>Your skills,your story your next <br /> job - all in one.</h4>
      <Link to={'/steps'} className='btn btn-dark text-light mt-5'>MAKE YOUR RESUME</Link>
    </div>
    <div className='col-md-4'></div>
    </div>
    </section>

    <section className='p-5'>
     <h1 className='text-center' style={{fontFamily:'Dancing Script'}}>Tools</h1>
      <div className='row align-items-center'>
      
        <div className='col-md-6'>
          <h4>Resume</h4>
         <p>Create unlimited new resumes and easily edit them afterwards</p>
          <h4>Cover Letters</h4>
          <p>Easily write proffessional cover letters.</p>
          <h4>Jobs</h4>
          <p>Automatically receive new and relevent job posting</p>
          <h4>Applications</h4>
          <p>Effortlessly manage and track your job application in an organized manner.</p>
        </div>
<div className='col-md-6 p-5'>
  <img src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" className='img-fluid' />
</div>

      </div>
     
    </section>

    <section id='part2'>

    </section>
   </>
  )
}

export default Home