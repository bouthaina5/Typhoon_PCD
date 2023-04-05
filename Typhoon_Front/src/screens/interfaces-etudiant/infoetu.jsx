import React, { useState } from 'react';
import './infoetu.css'
const Infoetu = () => {
    const [formData, setFormData] = useState({
      numtelephone: '',
      plaisir:'enterez votre plaisirs'
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
      return(
        <div className="container">
    <div className="card2">
      <div className="card-header"><h1>Formulaire d'informations personnelles</h1></div>
      <div className="card-body"></div>

<select className='liste-niveau'name="liste-niveau">
<option value="option-1">niveau</option>
  <option value="option-1">II1</option>
  <option value="option-1">II2</option>
  <option value="option-2">II3</option>
  <option value="option-2">MASTER</option>
 
</select>

<select className='liste-groupe' name="liste-groupe">
<option value="option-1">groupe</option>
  <option value="option-1">A</option>
  <option value="option-1">B</option>
  <option value="option-2">C</option>
  <option value="option-2">D</option>
  <option value="option-2">E</option>
  <option value="option-2">F</option>
 
</select>
<select className='liste-club' name="liste-club">
<option value="option-1">club</option>
  <option value="option-1">EJE</option>
  <option value="option-1">ENACTUS</option>
  <option value="option-2">ARE</option>
  <option value="option-2">OSSEC</option>
  <option value="option-2">CPS</option>
  <option value="option-2">CPC</option>
  <option value="option-1">IEEE</option>
  <option value="option-2">CO'ART</option>
  <option value="option-2">ENSI MUSIC CLUB</option>
  <option value="option-2">GDG</option>
  
 
</select>
<form onSubmit={handleSubmit}>
<input className='numtelephone'
          type="text"
          id="numtelephone"
          name="numtelephone"
          value={formData.numtelephone}
          onChange={handleInputChange}
          placeholder='enterez votre num'
      style={{ color: '#666' }}
        />
        <input className='plaisir'
          type="text"
          id="plaisir"
          name="plaisir"
          value={formData.plaisir}
          onChange={handleInputChange}
          
      style={{ color: '#666' }}
        />
       <button className='creation'>
  <strong> créer un compte </strong>
    </button> 
</form>
      </div>
    </div>
    
    );
};

export default Infoetu;
