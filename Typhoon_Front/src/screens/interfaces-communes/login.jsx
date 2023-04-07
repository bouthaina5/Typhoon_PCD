
import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  

  const [formData, setFormData] = useState({
    motdepasse:'mot de passe',
   
    email:'adresse mail professionnelle @ensi-uma.tn'
  });
  const [showformDataError, setShowformDataError] = useState(false);
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    /*console.log(formData);*/
    
    if (!formData) {
      setShowformDataError(true);
      
    }
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
    <div class="link">
      <Link to ='/SignUP' class="link1">Inscription gratuite</Link>
      <div style={verticalBarStyles}></div>

      <Link to ='/Login' class="link2">se connecter</Link>
   
    </div>
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
   
    
    <button class="connexion">
    connexion
    </button> 
    
    </div>
    </div>
    </div>
  );
};

export default Login;


