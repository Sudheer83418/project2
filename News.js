import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

const News = () => {
  
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <div className="container-fluid" style={{ backgroundColor: 'rgb(104, 102, 102)' }}>
      <div className="text-center fst-bold fst-italic text-info">
        <h1><b>FAKE PRODUCTS API STORE</b></h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <input style={{borderColor: '#076066' , borderRadius:"5px" , width:"auto" , margin:"auto"}}
            type="text"
            placeholder="Search Products"
            className="form-control"
            value={search}
            onChange={handleSearchChange}
          />
          
        </div>
      </div>
      <br />
      <div className="row">
        {products.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).map(item => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card h-100" style={{ backgroundColor: 'black', color: 'white' , padding:"10px" }}>
              <img src={item.image} className="card-img-top" alt="Product" style={{ height: '350px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <h3 className="card-title"><b>${item.price}</b></h3>
                <a href="#" className="btn text-dark mt-auto align-self-center" style={{ backgroundColor: 'white', width: '150px' }}><b>BUY NOW</b></a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br/>
      <h4 className='text-center text-light'><b>@copy right 2024</b></h4>
      <br/>
    </div>
  );
}

export default News;
