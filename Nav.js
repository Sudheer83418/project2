import React from 'react';
import { Link } from 'react-router-dom';
import pic from './api.png';
import './Nav.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Us from './Us.js'
import News from './News.js';
import Products from './Products.js';
import Wether from './Wether.js';
import Bmi from './Bmi.js';
import Food from './Food.js';


import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

const Nav = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg p-2" style={{ backgroundColor: 'black' }}>
        <div className="container-fluid" style={{ backgroundColor: 'black' }}>
          <Link className="navbar-brand" to="/" style={{ color: 'rgb(45, 157, 255)' }}>
            <img src={pic} alt="" />
            <b>HOME</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Us" className="nav-link active"><b>ABOUT US</b></Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link active"><b>CONTACT US</b></Link>
              </li>
              <li className="nav-item">
                <Link to="/Bmi" className="nav-link active"><b>CHECK BMI</b></Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>API</b>
                </Link>
                <ul className="dropdown-menu bg-info">
                  <li><Link to="/Newss" className="dropdown-item"><b>PRIME MINISTERS PROFILES</b></Link></li>
                  <li><Link to="/Food" className="dropdown-item"><b>FOOD</b></Link></li>
                  <li><Link to="/Wether" className="dropdown-item"><b>WETHER</b></Link></li>
               
                  <li><Link to="/News" className="dropdown-item"><b>PRODUCTS</b></Link></li>
                  
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              
              <button className="btn btn-outline-dark bg-info" type="submit">LOGOUT</button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Us' element={<Us />}></Route>
        <Route path='/News' element={<News />}></Route>
        <Route path='/Newss' element={<Products />}></Route>
        <Route path='/Wether' element={<Wether />}></Route>
        <Route path='/Bmi' element={<Bmi />}></Route>
        <Route path='/Food' element={<Food />}></Route>
        
        

      </Routes>
    </BrowserRouter>
  );
}

export default Nav;
