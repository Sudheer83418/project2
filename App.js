
import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Nav from "./Nav";
import './Login.css';

 
const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()


    if (username === 'sudheer' && password === 'varshit') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password. Please try again.');
      
    }
  };

 
  if (loggedIn) {
    return (
      <div>
        
        <Nav/>
        
      </div>
    );
  }


  return (
    
      <div className="body" style={{ backgroundAttachment: "fixed" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 position-relative">
              <div className="overlayy">
                <h1 className='display-3 fw-semibold text-light'>WELCOME TO</h1>
                <h1 className='display-5 fw-semibold text-warning'>APPLICATION PROGRAMMING INTERFACE</h1>
                <h1 className='display-3 fw-semibold text-light'>COMPONENTS</h1>
                <p className='text-light fw-medium'> Explanation: API stands for Application Programming Interface. <br/>It defines the methods and protocols that allow different software applications
                Enhancing Applications with External Data Sources <br/>
                Highlighting RESTful APIs for web services and their versatility.</p>
                <button type="submit" className="btn btn-primary bg-warning" style={{ justifyContent:"center",width:"20%", borderRadius:"40px"}}>know more</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="overlay">
                <form onSubmit={handleFormSubmit}>
                  <br/>
                  <div className="form-group">
                    <input
                      style={{border:"none", background:"none" , borderBottom:"2px solid yellow" , margin:"0px" , marginLeft:"0px"}}
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </div>
                  <br/>
                  <div className="form-group">
                    <input
                      style={{border:"none", background:"none" , borderBottom:"2px solid yellow" , margin:"0px" , marginLeft:"0px"}}
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary bg-warning" style={{ justifyContent:"center",width:"75%", borderRadius:"40px", margin:"30px"}}>Login</button>
                  <h5 className='text-center'> <a href="#" className='text-light'>Don't have an account?</a></h5>
                  <h5 className='text-center'><a href="#" className='text-info'>Create an account</a></h5>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
 
export default App;