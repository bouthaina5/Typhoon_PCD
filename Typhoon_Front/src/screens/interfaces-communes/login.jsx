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
        if(data.role=="prof"){
          window.location.href = "http://127.0.0.1:5173/Modules";

        }
        if(data.role =="etu"){
          window.location.href = "http://127.0.0.1:5173/Modules";
        }
        if(data.role=="coor"){
          window.location.href = "http://127.0.0.1:5173/addModule";
        }
        if(data.role=="admin"){
          window.location.href = "http://127.0.0.1:5173/addModule";
        }
    

      } else {
        setMessage('Invalid email address');
        
      }})
     console.log(message);
     console.log (formData);
     };
   };
  const passwordStyle = {
    WebkitTextSecurity: 'disc', // Pour les navigateurs basés sur Webkit (Chrome, Safari)
    // textSecurity: "disc", //
    color: '#666', // Pour les navigateurs basés sur Blink (Firefox, Edge)
  };

  return (
    <div className="conteneur">
      <div className="carte-signin">
        <div className="titre">
          <h2>connectez-vous</h2>
        </div>
        <div className="cartecorps">
          <form className="formulaire" onSubmit={handleSubmit}>
            <div>
              <input
                className="mail"
                type="text"
                id="email"
                name="email"
                placeholder="adresse mail professionelle"
                value={formData.email}
                onChange={handleInputChange}
                style={{ color: '#666' }}
              />
            

            </div>
            <div>
              <input
                className="mdp"
                type="password"
                id="motdepasse"
                name="motdepasse"
                value={formData.motdepasse}
                onChange={handleInputChange}
                style={passwordStyle}
                placeholder="mot de passe"
              />
            </div>
            <button className="connexion-button" onClick={handleSubmit}>Connexion</button>
          </form>
          <span className="link">
            Vous n'avez pas un compte?{' '}
            <a style={{ cursor: 'pointer' }} href="/signUP">
              inscrivez vous ici
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
