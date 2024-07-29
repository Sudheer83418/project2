import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import pic from "./Screenshot 2024-07-09 115559.png"
 
const Contact = () =>{
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Form submitted')
      }
  return (
    <div className='container-fluid' style={{ backgroundColor: "rgb(22, 0, 63)" }}>
      <div className='row'>
        <div className='col-md-12 text-center text-light' style={{ height: "70px", backgroundColor: "rgb(22, 0, 63)" }}><h1><b>CONTACT US TO KNOW MORE</b></h1></div>
 
        <div className='col-md-5 text-center text-light' style={{ backgroundColor: "rgb(22, 0, 63)", lineHeight: "50px" }}>
            
          
          <img className='img-fluid img-thumbnail p-2' src={pic} alt='#'/>
        </div>
 
        <div className='col-md-7'>
          <form className='m-4 text-light'>
            <input type='text' placeholder='Full Name*' className='form-control mb-3' />
 
            <input type='text' placeholder='Organization*' className='form-control mb-3' />
 
            <input type='text' placeholder='Email*' className='form-control mb-3' />
 
            <input type='text' placeholder='Business Number*' className='form-control mb-3' />
 
            <p className='mb-3 text-light'>Purpose of Enquiry:</p>
            <div className='mb-3'>
              <input type='radio' name='purpose' className='me-2' />Services
              <input type='radio' name='purpose' className='mx-2' />Partnership
              <input type='radio' name='purpose' className='ms-2' />Career opportunities
            </div>
 
            <textarea placeholder='Message' className='form-control mb-3' rows='4'></textarea>
 
            <div className='form-check mb-3'>
              <input type='checkbox' className='form-check-input me-2' />
              <label className='form-check-label'>Subscribe to our newsletter, blogs and perspectives</label>
            </div>
 
            <div className='form-check mb-3'>
              <input type='checkbox' className='form-check-input me-2' />
              <label className='form-check-label'>I acknowledge that I have read and understood the MOURI Tech Privacy Policy.</label>
            </div>
 
            <button className='btn btn-primary' onClick={handleSubmit}>SEND MESSAGE</button>
          </form>
        </div>
 
        <div className='col-md-12 text-center text-light' style={{ height: "70px", backgroundColor: "rgb(22, 0, 63)", lineHeight:"70px" }}><b>@copy right 2024</b></div>
      </div>
      
    </div>
  );
}
export default Contact;