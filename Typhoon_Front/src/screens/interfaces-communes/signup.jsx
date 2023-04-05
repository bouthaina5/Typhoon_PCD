
import React, { useState } from 'react';
import './signup.css';

import { Link } from 'react-router-dom';
const SignUp = () => {
  const [formData, setFormData] = useState({
    nomprenom: 'nom et prénom',
   
    email: 'adresse mail professionnelle @ensi-uma.tn'
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  const verticalBarStyles = {
    height: "38px",
    width: "1px",
    backgroundColor: "#000",
    display: "inline-block",
    margin: "0 10px"
  };
  


  return (
    
    <div className="container">
    <div className="card">
      <div className="card-header"><h1>Inscrivez -vous gratuitement ou connectez-vous</h1></div>
      <div className="card-body">
    <div className="lien">
      <Link  to ='/SignUp'className="lien1">Inscription gratuite</Link>
      <div style={verticalBarStyles}></div>

      <Link to='/Login' class="lien2">se connecter</Link>
   
    </div>
    <form onSubmit={handleSubmit}>
      <div>
        
        <input className='nom'
          type="text"
          id="nomprenom"
          name="nomprenom"
          value={formData.nomprenom}
          onChange={handleInputChange}
          
      style={{ color: '#666' }}
        />
      </div>
      
      <div>
        
        <input className='email'
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          
          style={{ color: '#666' }}
        />
      </div>
      
    </form>
    <button class="suivant">
    suivant
    </button>
    </div>
    </div>
    </div>
    
    
  );
};

export default SignUp;


