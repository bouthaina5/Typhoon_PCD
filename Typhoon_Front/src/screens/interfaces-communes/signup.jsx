import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [formData, setFormData] = useState({
    nomprenom: '',
    email: '',
    password: '',
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
  // const verticalBarStyles = {
  //   height: '38px',
  //   width: '1px',
  //   backgroundColor: '#000',
  //   display: 'inline-block',
  //   margin: '0 10px',
  // };

  return (
    <div className="conteneur">
      <div className="carte-signup">
        <div className="titre">
          <h2>Inscrivez-vous gratuitement </h2>
        </div>
        <div className="cartcorps">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="mail"
                type="text"
                id="nomprenom"
                name="nomprenom"
                value={formData.nomprenom}
                onChange={handleInputChange}
                style={{ color: '#666' }}
                placeholder="Ecrivez votre mail professionnel ici"
              />
            </div>
            <div>
              <input
                className="mail"
                type="text"
                id="nomprenom"
                name="nomprenom"
                value={formData.nomprenom}
                onChange={handleInputChange}
                style={{ color: '#666' }}
                placeholder="Ecrivez votre nom ici"
              />
            </div>
            <div>
              <input
                className="mdp"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ color: '#666' }}
                placeholder="mot de passe"
              />
            </div>
            <div>
              <input
                className="mdp"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ color: '#666' }}
                placeholder="confirmer mot de passe"
              />
            </div>
            <button className="inscription-button">S'inscrire</button>
          </form>
          <span className="link">
            Vous avez déja un compte? <a style={{cursor:'pointer'}} href='/Login'>connectez vous</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
