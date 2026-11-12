import React from 'react'
import { FaInstagram,FaPhoneAlt, FaWhatsapp, FaFacebookF } from 'react-icons/fa'
import { MdAttachEmail } from 'react-icons/md'


function Foooter() {
  return (
    <div style={{height:'400px',backgroundColor:'black'}}
    className='d-flex justify-content-center align-items-center flex-column text-light'>
        <h1>Contact Us</h1>
        <h5 className='mt-3'><MdAttachEmail className='me-2'/>resumebuilder@gmail.com</h5>
        <h5><FaPhoneAlt className='me-2'/>9876487612</h5>
        <h4>Connect With Us</h4>
        <div className='d-flex justify-content-center align-items-center my-3'>
        <FaWhatsapp className='mx-2 fs-3'/>
        <FaFacebookF className='mx-2 fs-3'/>
        <FaInstagram className='mx-2 fs-3'/>


        </div>
        <p>Designed & Built with React</p>
    

    </div>
  )
}

export default Foooter