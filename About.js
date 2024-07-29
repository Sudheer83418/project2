import React from 'react';
import pic1 from "./c1.jpeg";
import pic2 from "./c2.jpeg";
import pic3 from "./c3.jpg";
import pic4 from './per.jpg';
import pic5 from "./hi.png";
import './Nav.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

const About = () => {
  return (
    <div  style={{width:"100%"}}>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic3} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pic2} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pic1} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='container-fluid' style={{ background: "silver" }}>
        <div className='row'>
          <div className='col-md-8'>
            <h1 className='fw-bolder' style={{ marginLeft: "110px", marginTop: "90px" }}>Hi<span><img src={pic5} alt='#' /></span><span><br />I'm Charles,</span><span><br />Front-end Developer</span></h1>
            <p className='fw-medium' style={{ marginLeft: "110px" }}>I design and develop experiences that make people's lives<br /> simpler through Web and Mobile apps.I work with Figma,<br /> HTML5, CSS3, JavaScript, React, ReactNative and Flutter.</p>
          </div>
          <div className='col-md-4'>
            <img src={pic4} className='m-3' style={{ borderRadius: "0px 60px 0px 60px", height: "380px", width: "270px" }} alt="Girl" />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 bg-dark'>
            <br />
            <p className='text-center text-light'><b>@copy right2024</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
