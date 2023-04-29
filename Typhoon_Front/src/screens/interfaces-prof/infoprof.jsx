import React, { useState } from 'react';
import './infoprof.css';
const Infoprof = () => {
  const [formData, setFormData] = useState({
    numtel: 'enterez votre num',
    plaisir: 'enterez votre plaisirs',
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
  return (
    <div className="container">
      <div className="card3">
        <div className="card-head">
          <h1>Formulaire d'informations personnelles</h1>
        </div>
        <div className="card-body"></div>

        <select className="liste-grade" name="liste-grade">
          <option value="option-1">grade</option>
          <option value="option-1">II1</option>
          <option value="option-1">II2</option>
          <option value="option-2">II3</option>
          <option value="option-2">MASTER</option>
        </select>

        <form onSubmit={handleSubmit}>
          <input
            className="numtel"
            type="text"
            id="numtel"
            name="numtel"
            value={formData.numtel}
            onChange={handleInputChange}
            style={{ color: '#666' }}
          />
          <input
            className="plaisir"
            type="text"
            id="plaisir"
            name="plaisir"
            value={formData.plaisir}
            onChange={handleInputChange}
            style={{ color: '#666' }}
          />
          <button className="compte">
            <strong> créer un compte</strong>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Infoprof;
