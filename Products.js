import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const Products = () => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/politicians')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);

  return (
    <div className="container-fluid" style={{ backgroundColor: 'rgb(104, 102, 102)' }}>
      <div className="text-center fst-bold fst-italic text-info">
        <h1><b>FAKE PRIME MINISTERS API STORE</b></h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <input style={{borderColor: '#076066' , borderRadius:"5px" , width:"auto" , margin:"auto"}}
            type="text"
            placeholder="Search PRIME MINISTERS"
            className="form-control"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <br />
      <div className="row">
        {state.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map(item => (
          <div key={item.name} className="col-md-3 mb-4">
            <div className="card h-100" style={{ backgroundColor: 'black', color: 'white' , padding:"10px"}}>
              <img src={item.image} className="card-img-top" alt="Politician" style={{ height: '300px' }} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><b>Date of Birth:</b> {item.dob}</p>
                <p className="card-text"><b>Country:</b> {item.country}</p>
                <p className="card-text"><b>Party:</b> {item.party}</p>
                <p className="card-text"><b>Position:</b> {item.position}</p>
                <p className="card-text"><b>Biography:</b> {item.biography}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    
      <div className="text-center text-light">
      <br />
        <h4><b>@copy right 2024</b></h4>
      </div>
      
    </div>
  );
};

export default Products;
