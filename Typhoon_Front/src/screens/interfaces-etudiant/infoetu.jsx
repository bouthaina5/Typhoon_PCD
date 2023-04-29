import React, { useState } from 'react';
import './infoetu.css'
const Infoetu = () => {
    const [formData, setFormData] = useState({
      numtelephone: '',
      plaisir:''
    });
    const [listeniveau, setListeniveau] = useState('');
    const [groupe, setGroupe] = useState('');
    const [club, setClub] = useState('');
    const data = {
      numtelephone: formData.numtelephone,
      plaisir: formData.plaisir,
      listeniveau:listeniveau,
      groupe:groupe,
      club:club
    };
    const handleInputChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
        
      };
      const handleInputChangelist = (event) => {
        setListeniveau(
          event.target.value
          
        );};
        const handleInputChangegroupe = (event) => {
          setGroupe(
            event.target.value
            
          );};
          const handleInputChangeclub = (event) => {
            setClub(
              event.target.value
              
            );};

      const handleSubmit = async(e) => {
        e.preventDefault();
        
        const response = await fetch("http://127.0.0.1:5000/infoetu" ,{
          method:'POST',
           headers: {
            'Content-Type': 'application/json',
    
          },
         body:JSON.stringify(data),
         mode : 'cors'
          
         });
        
         console.log (data);
      };
      return(
        <div className="container">
    <div className="card2">
      <div className="card-header"><h1>Formulaire d'informations personnelles</h1></div>
      <div className="card-body"></div>

<select className='liste-niveau'name="liste-niveau"    >
<option value="niveau">niveau</option>
  <option value="II1">II1</option>
  <option value="II2">II2</option>
  <option value="II3">II3</option>
  <option value="MASTER">MASTER</option>
 
</select>

<select className='liste-groupe' name="liste-groupe"  >
<option value="groupe">groupe</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
  <option value="D">D</option>
  <option value="E">E</option>
  <option value="F">F</option>
 
</select>
<select className='liste-club' name="liste-club"  value={club} onChange={handleInputChangeclub}>
<option value="club">club</option>
  <option value="EJE">EJE</option>
  <option value="ENACTUS">ENACTUS</option>
  <option value="ARE">ARE</option>
  <option value="OSSEC">OSSEC</option>
  <option value="CPS">CPS</option>
  <option value="CPC">CPC</option>
  <option value="IEEE">IEEE</option>
  <option value="CO'ART">CO'ART</option>
  <option value="ENSI MUSIC CLUB">ENSI MUSIC CLUB</option>
  <option value="GDG">GDG</option>
  
 
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
          placeholder='entrez vos plaisirs'
      style={{ color: '#666' }}
        />
       <button className='creation' onClick={handleSubmit}>
  <strong> créer un compte </strong>
    </button> 
</form>
      </div>
    </div>
    
    );
};

export default Infoetu;
