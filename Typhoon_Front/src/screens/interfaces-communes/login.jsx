import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({
    motdepasse: '',
    email: '',
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

    if (!formData) {
      setShowformDataError(true);
    }
  };

  const verticalBarStyles = {
    height: '38px',
    width: '1px',
    backgroundColor: '#000',
    display: 'inline-block',
    margin: '0 10px',
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
            <button className="connexion-button">Connexion</button>
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
