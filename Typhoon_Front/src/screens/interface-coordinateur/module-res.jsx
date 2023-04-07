import React, { useState } from 'react';
import './module-res.css';
const Module = () => {

    

        const [formData, setFormData] = useState({
            nommodule: 'nom du module',
           
            nbrheures: 'nombre heures',
            objectifs:'objectif du module',
            compétences:'les compétences à aquises '

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
            <div>
               <div className="cartee">
            <input className='nommodule'
            type="text"
            id="nommodule"
            name="nommodule"
            value={formData.nommodule}
            onChange={handleInputChange}
            
        style={{ color: '#666' }}
          /><br></br>
          <select id="liste-niveau" name="liste-niveau">
            <option value="option-1">Niveau</option>
              <option value="option-2">II1</option>
             <option value="option-3">II2</option>
             <option value="option-4">II3</option>
             <option value="option-5">MASTER</option>
</select><br></br>
<select id="liste-semester" name="liste-semester">
            <option value="option-1">Semester</option>
              <option value="option-2">1</option>
             <option value="option-3">2</option>
             <option value="option-4">3</option>
             <option value="option-5">4</option>
             <option value="option-5">5</option>
            
</select><br></br>
<input
            type="text" className='nbrheures'
            id="nbrheures"
            name="nbrheures"
            value={formData.nbrheures}
            onChange={handleInputChange}
            
        style={{ color: '#666' }}
          /><br></br>

<select id="liste-resp" name="liste-resp">
            <option value="option-1">Responsable module</option>
              <option value="option-2">1</option>
             <option value="option-3">2</option>
             <option value="option-4">3</option>
             <option value="option-5">4</option>
             <option value="option-5">5</option>
            
</select><br></br>

<input
            type="text" className='objectifs'
            id="objectifs"
            name="objectifs"
            value={formData.objectifs}
            onChange={handleInputChange}
            
        style={{ color: '#666' }}
          /><br></br>
          <input
            type="text" className='comp'
            id="compétences"
            name="compétences"
            value={formData.compétences}
            onChange={handleInputChange}
            
        style={{ color: '#666' }}
          /><br></br>
           <button className='terminer'>Terminer</button>
    </div>
    
</div>
    );
};
    export default Module;