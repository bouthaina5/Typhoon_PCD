import React, { useState } from 'react';
import './module-res.css';
const Module = () => {

    

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
            /* .then(response => response.json())
           
             .then(data => {
              if (data.val === "valide") {
               console.log(data);
        
              } else {
                setMessage('Invalid email address');
                
              }})*/
             console.log(message);
             console.log (formData);
             };
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
          <select id="liste-niveau" name="liste-niveau" value={niveau} onChange={handleInputChangeniveau}>
            <option value="niveau">Niveau</option>
              <option value="II1">II1</option>
             <option value="II2">II2</option>
             <option value="II3">II3</option>
             <option value="MASTER">MASTER</option>
</select><br></br>
<select id="liste-semester" name="liste-semester" value={semester} onChange={handleInputChangesemester}>
            <option value="Semester">Semester</option>
              <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
            
</select><br></br>
<input
            type="text" className='nbrheures'
            id="nbrheures"
            name="nbrheures"
            value={formData.nbrheures}
            onChange={handleInputChange}
            
        style={{ color: '#666' }}
          /><br></br>

<select id="liste-resp" name="liste-resp"value={responsable} onChange={handleInputChangeresponsable}>
            <option value="responsable module">Responsable module</option>
              <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
            
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
           <button className='terminer' onClick={handleSubmit}>Terminer</button>
    </div>
    
</div>
    );
};
    export default Module;