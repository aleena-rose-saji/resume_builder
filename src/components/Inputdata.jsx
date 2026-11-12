import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobTitle from '../assets/jobRole.json'
import skills from '../assets/jobSkills.json'
import jobsummary from '../assets/summaries.json'
import { addResumeAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';





const steps = ['Basic Information', 'Contact Details', 'Education Details' , 'Review & Submit'];

function Inputdata({resumeData,setResumeData}) {

  console.log(resumeData);

  const [activeStep, setActiveStep] = React.useState(0);
  const navigate=useNavigate()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const previousActiveStepRef = React.useRef(activeStep);
  const resetButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);
  const renderStepContent=(stepcount)=>{
    switch(stepcount){
      case 0: return (
       <div>
        <h1>Personal Details</h1>
        <TextField value={resumeData.name} onChange={(e)=>setResumeData({...resumeData,name:e.target.value})} id="standard-basic" className='w-100' label="Full Name" variant="standard" />

        <FormControl variant="standard" className='w-100'>
        <InputLabel id="demo-simple-select-standard-label">Job Title</InputLabel>
        <Select value={resumeData.jobTitle} onChange={(e)=>setResumeData({...resumeData,jobTitle:e.target.value})}  labelId="demo-simple-select-standard-label" id="demo-simple-select-standard">

          {
            jobTitle.jobRoles.map(job=>(
              <MenuItem value={job}>{job}</MenuItem>

            ))
          }
         
        </Select>
      </FormControl>

        <TextField value={resumeData.location} onChange={(e)=>setResumeData({...resumeData,location:e.target.value})} id="standard-basic" className='w-100' label="Location" variant="standard" />

       </div>

      )
      
      case 1: return (
        <div>
           <h1>Contact Details</h1>
        <TextField value={resumeData.email} onChange={(e)=>setResumeData({...resumeData,email:e.target.value})} id="standard-basic" className='w-100' label="Email" variant="standard" />
        <TextField value={resumeData.phone} onChange={(e)=>setResumeData({...resumeData,phone:e.target.value})} id="standard-basic" className='w-100' label="Phone" variant="standard" />
        <TextField value={resumeData.github} onChange={(e)=>setResumeData({...resumeData,github:e.target.value})} id="standard-basic" className='w-100' label="LinkedIn" variant="standard" />
        <TextField value={resumeData.linkedIn} onChange={(e)=>setResumeData({...resumeData,linkedIn:e.target.value})} id="standard-basic" className='w-100' label="Giithub" variant="standard" />
        </div>

      )
       case 2: return (
        <div>
           <h1>Educational Details</h1>
        <TextField value={resumeData.course} onChange={(e)=>setResumeData({...resumeData,course:e.target.value})} id="standard-basic" className='w-100' label="Bachelor's Degree" variant="standard" />
        <TextField value={resumeData.university} onChange={(e)=>setResumeData({...resumeData,university:e.target.value})} id="standard-basic" className='w-100' label="College/University Name" variant="standard" />
        <TextField value={resumeData.passout} onChange={(e)=>setResumeData({...resumeData,passout:e.target.value})} id="standard-basic" className='w-100' label="Passout Year" variant="standard" />

        </div>

      )
      case 3: return (
        <div>
          <h1>Skills</h1>
          <p>Our AI will generate skills & summary according to your job role. Click the <span className='fw-bold'>AL SKILL & SUMMARY</span> button to proceed</p>
        </div> 
      )
    }

  }
  const generateSkillsum=()=>{
    setResumeData({...resumeData,skills:skills[resumeData.jobTitle],summary:jobsummary[resumeData.jobTitle]})

    handleNext()
  }
  const addResume=async()=>{
   const { name,jobTitle,location,email,phone,github,linkedIn,course,university,passout,skills,summary}=resumeData
    if(name&&jobTitle&&location&&email&&phone&&github&&linkedIn&&course&&university&&passout&&skills.length>0&&summary){
      const res=await addResumeAPI(resumeData)
      console.log(res);
      if(res.status==201){
        alert("resume generated successfully")
         navigate(`/view/${res.data.id}`)
      }
      
    }
    else{
      alert("fill the field completely")
    }
      
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={addResume} ref={resetButtonRef}>
             Finish
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* view of each steps */}
          <Box>
           
           {renderStepContent(activeStep)}


          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            {
              activeStep==steps.length-1?
              <button className='btn' onClick={generateSkillsum}>Generate Skills&Summary</button>
              :
              <button className='btn' onClick={handleNext}>Next</button>
            }
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default Inputdata