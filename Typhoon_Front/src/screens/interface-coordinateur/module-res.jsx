import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ModuleService from '../../services/ModuleService';
import './module-res.css';

const CreateModule = () => {
        const [formData, setFormData] = useState({
            nommodule: '',
            nbrheures: '',
            objectifs:'',
            compétences:' ',
        
          });
          const [niveau, setNiveau] = useState('');
          const [semester, setSemester] = useState('');
          const [responsable, setResponsable] = useState('');
          const data = {
            nommodule: formData.nommodule,
            nbrheures: formData.nbrheures,
            objectifs:formData.objectifs,
            compétences:formData.compétences,
            niveau:niveau,
          semester:semester,
          responsable:responsable
            
          
          };
          const handleInputChange = (event) => {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            });
          };
          const handleInputChangeniveau = (event) => {
            setNiveau(
              event.target.value
              
            );};
            const handleInputChangesemester = (event) => {
              setSemester(
                event.target.value
                
              );};
              const handleInputChangeresponsable = (event) => {
                setResponsable(
                  event.target.value
                  
                );};
                
        
          const handleSubmit = async(e) => {
            e.preventDefault();
             
            if (formData){
             const response = await fetch("http://127.0.0.1:5000/modules" ,{
              method:'POST',
               headers: {
                'Content-Type': 'application/json',
        
              },
             body:JSON.stringify(data),
             mode : 'cors'
           
              
             })
             console.log(message);
             console.log (formData);
             };
           };
  return (
    <div className="outer-container">
      <form>
        <div className="cartee">
          <input
            className="text-input"
            type="text"
            id="nommodule"
            name="nommodule"
            value={formData.nommodule}
            onChange={handleInputChange}
            style={{ color: '#666' }}
            placeholder="nom du module"
          />
          <br></br>
          <div className="inner-select">
            <select
              className="select-input"
              name="liste-niveau"
              style={{ width: '150px', marginRight: '1rem' }}
              onChange={handleInputChangeniveau}
            >
              <option value="Niveau">Niveau</option>
              <option value="II1">II1</option>
              <option value="II2">II2</option>
              <option value="II3">II3</option>
              <option value="MASTER">MASTER</option>
            </select>
            <br></br>
            <select
              className="select-input"
              name="liste-semester"
              style={{ width: '150px', marginRight: '1rem' }}
              value={semester} onChange={handleInputChangesemester}
            >
              <option value="Semester">Semester</option>
              <option value="S1">1</option>
             <option value="S2">2</option>
             <option value="S3">3</option>
             <option value="S4">4</option>
             <option value="S5">5</option>
            </select>
          </div>
          <br></br>
            <input
            type="text"
             className="text-input"
            id="nbrheures"
            name="nbrheures"
            value={formData.nbrheures}
            onChange={handleInputChange}
            style={{ color: '#666' }}
            placeholder="nombre d'heures du module"
          />
          <br></br>
          <select className="select-input" name="liste-resp" value={responsable} onChange={handleInputChangeresponsable}>
          <option value="responsable module">Responsable module</option>
              <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
          </select>
              <br></br>
          <input
            type="text"
            className="text-input"
            id="objectifs"
            name="objectifs"
            value={formData.objectifs}
            onChange={handleInputChange}
            style={{ color: '#666' }}
            placeholder="objectifs du module"
          />
          <br></br>
          <input
            type="text"
            className="text-input"
            id="compétences"
            name="compétences"
            value={formData.compétences}
            onChange={handleInputChange}
            style={{ color: '#666' }}
            placeholder="compétences à aquérir"
          />
          <br></br>
          <button className="enregistrer" onClick={handleSubmit}>
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateModule;
