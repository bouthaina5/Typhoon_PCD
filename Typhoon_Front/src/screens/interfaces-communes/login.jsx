
import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  

  const [formData, setFormData] = useState({
    email:'',
    motdepasse:''
   
  
  });
  const [message ,setMessage] = useState('');
  const [showformDataError, setShowformDataError] = useState(false);
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
 
  const handleSubmit = async(e) => {
    e.preventDefault();
     
    if (formData){
     const response = await fetch("http://127.0.0.1:5000/login" ,{
      method:'POST',
       headers: {
        'Content-Type': 'application/json',

      },
     body:JSON.stringify(formData),
     mode : 'cors'
   
      
     })
     .then(response => response.json())
   
     .then(data => {
      if (data.val === "valide") {
       console.log(data);

      } else {
        setMessage('Invalid email address');
        
      }})
     console.log(message);
     console.log (formData);
     };
   };
 
  const verticalBarStyles = {
    height: "38px",
    width: "1px",
    backgroundColor: "#000",
    display: "inline-block",
    margin: "0 10px"
  };
  const passwordStyle = {
    fontFamily: "Arial",
    letterSpacing: "0.3em",
    WebkitTextSecurity: "disc", // Pour les navigateurs basés sur Webkit (Chrome, Safari)
   // textSecurity: "disc", //
    color: '#666'// Pour les navigateurs basés sur Blink (Firefox, Edge)
  };

  return (
<div className="conteneur">
    <div className="carte">
      <div className="titre"><h1>Inscrivez -vous gratuitement ou connectez-vous</h1></div>
      <div className="cartecorps">

    <form  className ="formulaire"onSubmit={handleSubmit}>
      
      
      <div>
        
        <input className='mail'
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          
          style={{ color: '#666' }}
        />     
      </div><div>
        
        <input className='mdp'
          type="password"
          id="motdepasse"
          name="motdepasse"
          value={formData.motdepasse}
          onChange={handleInputChange}
          style={passwordStyle}
          
        />
        
      </div>
   
    </form>
   
    
    <button className="connexion" onClick={handleSubmit}>
    connexion
    </button> 
  
    
    </div>
    </div>
    </div>
  );
};

export default Login;


