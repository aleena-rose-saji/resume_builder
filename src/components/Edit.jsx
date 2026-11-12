import React from 'react'
import { FaEdit } from 'react-icons/fa'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaXmark } from 'react-icons/fa6';
import jobTitle from '../assets/jobRole.json'
import { useRef } from 'react';
import { updateResumeAPI } from '../services/allAPI';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh',
  overflowY: 'auto'
};

function Edit({ resumeData, setResumeData }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillRef = useRef()
  // console.log(resumeData);

  const addSkills = (skill) => {
    if (skill) {
      if (resumeData?.skills.find(sk => sk.toLowerCase() == skill.toLowerCase())) {
        alert("skill already added..please add another one")

      }
      else {
        setResumeData({...resumeData,skills:[...resumeData.skills,skill]})
        skillRef.current.value=""
      }


    }
    else {
      alert("enter a valid skill")
    }
  }
  const removeSkill=(skill)=>{
  setResumeData({...resumeData,skills:resumeData.skills?.filter(sk=>sk!=skill)})
  }

  const update=async()=>{
     const { name,jobTitle,location,email,phone,github,linkedIn,course,university,passout,skills,summary}=resumeData
      if(name&&jobTitle&&location&&email&&phone&&github&&linkedIn&&course&&university&&passout&&skills.length>0&&summary){
        const res=await updateResumeAPI(resumeData?.id,resumeData)
        console.log(res);
        if(res.status==200){
          alert("resume updated successfully")
          handleClose()
           navigate(`/view/${res.data.id}`)
        }
        
      }
      else{
        alert("fill the field completely")
      }
        
    }
  return (
    <>
      <button onClick={handleOpen} className='btn btn-warning text-light'><FaEdit className='fs-2' /></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <h1>Personal Details</h1>
              <TextField value={resumeData.name} onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })} id="standard-basic" className='w-100' label="Full Name" variant="standard" />

              <FormControl variant="standard" className='w-100'>
                <InputLabel id="demo-simple-select-standard-label">Job Title</InputLabel>
                <Select value={resumeData.jobTitle} onChange={(e) => setResumeData({ ...resumeData, jobTitle: e.target.value })} labelId="demo-simple-select-standard-label" id="demo-simple-select-standard">

                  {
                    jobTitle.jobRoles.map(job => (
                      <MenuItem value={job}>{job}</MenuItem>

                    ))
                  }

                </Select>
              </FormControl>

              <TextField value={resumeData.location} onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })} id="standard-basic" className='w-100' label="Location" variant="standard" />

            </div>

            <div>
              <h1>Contact Details</h1>
              <TextField value={resumeData.email} onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })} id="standard-basic" className='w-100' label="Email" variant="standard" />
              <TextField value={resumeData.phone} onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })} id="standard-basic" className='w-100' label="Phone" variant="standard" />
              <TextField value={resumeData.github} onChange={(e) => setResumeData({ ...resumeData, github: e.target.value })} id="standard-basic" className='w-100' label="LinkedIn" variant="standard" />
              <TextField value={resumeData.linkedIn} onChange={(e) => setResumeData({ ...resumeData, linkedIn: e.target.value })} id="standard-basic" className='w-100' label="Giithub" variant="standard" />
            </div>



            <div>
              <h1>Educational Details</h1>
              <TextField value={resumeData.course} onChange={(e) => setResumeData({ ...resumeData, course: e.target.value })} id="standard-basic" className='w-100' label="Bachelor's Degree" variant="standard" />
              <TextField value={resumeData.university} onChange={(e) => setResumeData({ ...resumeData, university: e.target.value })} id="standard-basic" className='w-100' label="College/University Name" variant="standard" />
              <TextField value={resumeData.passout} onChange={(e) => setResumeData({ ...resumeData, passout: e.target.value })} id="standard-basic" className='w-100' label="Passout Year" variant="standard" />

            </div>

            <div className='mt-5'>
              <h1>Skills</h1>
              <div className='d-flex align-items-center justify-content-center'>
                <input ref={skillRef} type="text" className='form-control' placeholder='enter skill' />
                <button onClick={() => addSkills(skillRef.current.value)} className='btn btn-primary ms-3'>ADD</button>
              </div>
              <h5 className='mt-5'>Added Skills:</h5>
              <div className='d-flex flex-wrap'>
                {
                  resumeData?.skills?.map(sk => (
                    <button className='btn btn-dark m-1' onClick={()=>removeSkill(sk)}>{sk}<FaXmark /></button>
                  ))
                }
              </div>
            </div>
            <div className='mt-5'>
              <h3>Professional Summary</h3>
              <TextField value={resumeData?.summary} onChange={(e)=>setResumeData({...resumeData,summary:e.target.value})} id="standard-basic" className='w-100' label="summary" variant="standard" multiline />
            </div>
            <button className='btn btn-primary my-3 w-100' onClick={update}>UPDATE</button>
          </Typography>
        </Box>
      </Modal>


    </>
  )
}

export default Edit