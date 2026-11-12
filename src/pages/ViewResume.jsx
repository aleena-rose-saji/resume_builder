import React, { useEffect } from 'react'
import Preview from '../components/Preview'
import Edit from '../components/Edit'
import { FaBackward, FaFileDownload, FaHistory } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { downloadResumeAPI, getResumeAPI } from '../services/allAPI'
import html2canvas from 'html2canvas'
import { useRef } from 'react'
import jspdf from 'jspdf'




function ViewResume() {

  const [resumeDetails, setResumeDetails] = useState({})
  console.log(resumeDetails);
  const previewRef=useRef()
console.log(previewRef);


  const { id } = useParams()
  console.log(id);
  useEffect(() => {
    getResume()
  }, [])


  const getResume = async () => {
    const res = await getResumeAPI(id)
    console.log(res);
    if(res.status==200){
      setResumeDetails(res.data)
    }

  }

  const downloadResume=async()=>{
   
    const previewTag=previewRef.current
    const canvas=await html2canvas(previewTag)
    canvas.toBlob(async(blob)=>{

       const formData = new FormData();

    formData.append("file", blob);
    formData.append("upload_preset", "my_preset");

    
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/qfoluk21/image/upload",
        {
          method: "POST",
          body: formData
        }
      );
     const res=await response.json()
     console.log(res);
     const shortUrl=res.secure_url
     generatePDF(shortUrl)
     
    })
    
  }
  const generatePDF= async(imageUrl)=>{
    const today=new Date()
    const timestamp=`${today.toLocaleDateString()},${today.toLocaleTimeString()}`
    console.log(timestamp); 
    const pdf=new jspdf()
    const imgWidth=pdf.internal.pageSize.getWidth()
    const imgHeight=pdf.internal.pageSize.getHeight()

    pdf.addImage(imageUrl,"PNG",0,0, imgWidth,imgHeight)
    
    const downloadDetails={resumeId:id,resumeImg:imageUrl,timestamp}
    const result=await downloadResumeAPI(downloadDetails)
    console.log(result);
    if(result.status == 201){
      pdf.save(`${resumeDetails.name}-resume.pdf`)
    }
  }


  
  return (

    <>
      <div className='d-flex align-items-center justify-content-center flex-column m-5'>
        <div className='d-flex align-items-center justify-content-center'>
          <button onClick={downloadResume} className='btn fs-1 text-danger mx-3'>
            <FaFileDownload/>
          </button>

          <div className='mx-3'>
            <Edit resumeData={resumeDetails} setResumeData={setResumeDetails}/>
          </div>
          <Link to={'/history'} className='btn fs-1 text-success mx-3'>
            <FaHistory />
          </Link>
          <Link to={'/view/8'} className='btn fs-1 text-primary mx-3'>
            <FaBackward />
          </Link>
        </div>
        <div ref={previewRef} className='my-5'>
          <Preview resumeData={resumeDetails}/>
        </div>
      </div>

    </>
  )
}

export default ViewResume