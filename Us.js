import Data from './info.json'
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import pic from "./srr.png"
const US = () => {
    const [info, setInfo] = useState(Data);
  
  
    return (
      <>
      <div className="container-fluid bg-dark text-light text-center">
        <div className="row">
            <div className='col-md-12 text-light'>
               <br/> <h1><b>Organization</b></h1>
                <br/>

            </div>
            <div className='col-md-12 img-fluid'>
                <img className= 'mx-auto d-block img-fluid img-thumbnail' src={pic} alt='#' />

            </div>
            <div className='col-md-1 text-light text-center'></div>
           
            <div className='col-md-10 text-light '>
                <br/>
                <h1 className='text-center p-3'><b>Evolving. Emerging. Expanding.</b></h1>
                <p className='text-center'><b>Established in 2005, MOURI Tech has evolved into a trusted Global Enterprise Solutions Provider for<br/> customers from various industries. We have a highly skilled and experienced talent pool of professionals<br/> delivering consistent service excellence to customers, globally.</b></p>
                <p className='text-center'><b>Headquartered in Texas (USA), MOURI Tech has Delivery COE in India and offices across five continents.<br/> We are a CMMI-DEV/5 certified organization offering a wide range of IT services that cater to the digital<br/> needs of businesses of today and tomorrow.</b></p>
                <p className='text-center'><b> 
                The recent addition of Great Place to Work certification and being featured among India’s Best Workplaces for<br/> Building a Culture of Innovation to our list of accolades has meant greater visibility on the Delivery-centric vista. We<br/> continue to carry rich work traditions with aplomb, and are proud to be a futuristic organization.</b></p>
            </div>
            
            <div className='row'>
          
            {info.map((x) => (<>
            <div className="col-md-4 ">
            <div class="card bg-dark text-light">
              <img className='mx-auto d-block img-fluid img-thumbnail' src={x.pic} alt="..." />
              <div class="card-body bg-dark text-light">
                <h5 class="card-title text-center">{x.name}</h5>
                <p className='text-center'>{x.pera}</p>
              </div>
              
        </div>
        </div>
        
        </>
    
            ))}
            
            </div>
            </div>
           <br/><b>@copy right 2024</b><br/><p className='text-dark'>a</p></div>
            </>)
            }
    
  export default US;
