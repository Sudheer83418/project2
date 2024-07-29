import React, { useState } from 'react';
import axios from 'axios';
import bgImage from './bggg.jpg';


const Wether = () => {
  const [state, setState] = useState({});
  const [state1, setState1] = useState([]);
  const [state2, setState2] = useState({});
  const [state3, setState3] = useState('');
  const [state4, setState4] = useState({});
  const [state5, setState5] = useState([]);
  const [loc, setLoc] = useState('');

  const locationChange = (e) => {
    setLoc(e.target.value);
  }

  const fetchData = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=11c15604a23bd024c1c83c12bf0a9e6f`)
      .then((res) => {
        setState(res.data.main);
        setState1(res.data.clouds);
        setState2(res.data.sys);
        setState3(res.data.name);
        setState4(res.data.wind);
        setState5(res.data.weather);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const weatherIcon = state5.map((x) => x.icon);
  const iconUrl = `http://openweathermap.org/img/w/${weatherIcon}.png`;

  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return (
    <>
      <style>
        {`
          body {
                        background-image: url(${bgImage});

            background-size: cover;
          }
          #main {
            width: 1000px;
            font-family: "Oswald", sans-serif;
            font-optical-sizing: auto;
            font-weight: weight;
          }
          #pain {
            border-radius: 10px;
          }
          #gain {
            border-radius: 20px;
          }
          @media (max-width: 680px) {
            #main {
              max-width: 100%;
            }
          }
        `}
      </style>

      <div className='container-fluid' id='main'>
        <br/>
        <div className='row'>
          <div className='col-md-4 text-warning'>
            <h5><b>THE WEATHER<br/>FORECASTING</b></h5>
          </div>
          <div className='col-md-4 text-light'>
          </div>
          <div className='col-md-4 text-light'>
            <br/>
            <h5 className='text-start  text-warning'>DATE: {date}/{month}/{year}</h5>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12 text-light'>
            <input type='text' id='pain' placeholder='Enter your city' style={{ width: '100%', height: '40px' }} onChange={locationChange} />
          </div>
          <br/><br/>
          <div className='col-md-2'>
            <button id='gain' className='btn btn-outline-warning mt-2' onClick={fetchData}>Get Data</button>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <h4 className='text-center  text-warning'><b>CURRENT WEATHER</b></h4>
          </div>
        </div>

        <div className='row' id='jain'>
          <div className='col-md-4 text-light'>
            <h5>{state3}, {state2.country}<br/>{date}/{month}/{year}</h5>
          </div>
          <div className='col-md-4 text-light'>
            <h5>Temp <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='25px' height='25px'><path d="M448 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 96a96 96 0 1 1 192 0A96 96 0 1 1 320 96zM144 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C70.2 332.6 64 349.5 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM32 112C32 50.2 82.1 0 144 0s112 50.1 112 112V276.5c0 .1.1.3.2.6c.2.6.8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S0 447.5 0 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3.2-.5.2-.6V112zM192 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z"/></svg><br/>{Math.round(!isNaN(state.temp) ? state.temp - 273.15 : '')} <sup>o</sup>C</h5>
          </div>
          <div className='col-md-4 text-light'>
            {state5.map((x, index) => (
              <h5 key={index}>DESC<br/>{x.description} <img src={iconUrl} alt='' /></h5>
            ))}
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <h4 className='text-center  text-warning'><b>ALL CONDITIONS</b>
            </h4>
          </div>
          <hr/>
          <div className='row' id='jam'>
            <div className='col-md-3 text-light'>
              <h5>Temp <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='25px' height='25px'><path d="M448 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 96a96 96 0 1 1 192 0A96 96 0 1 1 320 96zM144 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C70.2 332.6 64 349.5 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM32 112C32 50.2 82.1 0 144 0s112 50.1 112 112V276.5c0 .1.1.3.2.6c.2.6.8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S0 447.5 0 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3.2-.5.2-.6V112zM192 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z"/></svg><br/>{Math.round(!isNaN(state.temp) ? state.temp - 273.15 : '')} <sup>o</sup>C</h5>
            </div>
            <div className='col-md-3 text-light'>
              <h5>wind <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='25px' height='25px'><path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/></svg><br/>{state4.speed} m/s</h5>
            </div>
            <div className='col-md-3 text-light'>
              <h5>clouds <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width='25px' height='25px'><path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/></svg><br/>{state1.all} %</h5>
            </div>
            <div className='col-md-3 text-light'>
              <h5>humidity <br/>{state.humidity} %</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Wether
