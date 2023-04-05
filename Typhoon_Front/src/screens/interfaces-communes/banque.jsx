import React, { useState } from 'react';
import './banque.css';
import { Link } from 'react-router-dom';
const Tableau = () => {
  const [formData, setFormData] = useState({
    nom_module: '',
    desc_module:'',
    liste:''
  });
  const handlChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
 
  return (
   <> 

  <div className='information'>
<label htmlFor="nom_module"><strong>nom_module :</strong></label>
<input className="nom_module"
          type="text"
          id="nom_module"
          name="nom_module"
          value={formData.nom_module}
          onChange={handlChange}/><br></br>
        
        
<label htmlFor="desc_module"><strong>description_module :</strong></label>
<input className="desc_module"
          type="text"
          id="desc_module"
          name="desc_module"
          value={formData.desc_module}
          onChange={handlChange}
        /><br></br>
        
        <label htmlFor="liste"><strong>liste_professeurs :</strong></label>
<input className="liste"
          type="text"
          id="liste"
          name="liste"
          value={formData.liste}
          onChange={handlChange}/>
         </div>
         
         
        


<div class="tri">
<select className="liste-deroulante1" name="liste-deroulante1">
  <option value="option-1">Taille</option>
  <option value="option-1">croissant</option>
  <option value="option-2">decroissant</option>

 
</select>

<select className="liste-deroulante2" name="liste-deroulante2">
  <option value="option-1">Difficulté</option>
  <option value="option-1">croissante</option>
  <option value="option-2">decroissante</option>
 
</select>

<select className="liste-deroulante3" name="liste-deroulante3">
  <option value="option-1">Rating</option>
  <option value="option-1">option1</option>
  <option value="option-2">Option 2</option>
 
</select> </div>


 <table className="table-conteneur">
      <thead>
        <tr className="ligne1">

          <th>Titre</th>
          <th>Taille</th>
          <th >Difficulté</th>
          <th>Rating</th>
        </tr>
      </thead>
     <tbody>
        <tr>

         <th> <Link to ='/Tableauquest'>chapitre1</Link></th>
          <th>3</th>
          <th >moyen</th>
           <th>14</th>
        </tr>
        <tr>

<th>chapitre2</th>
<th>4</th>
<th>facile</th>
 <th>10</th>
</tr>
<tr>

<th>chapitre3</th>
<th>6</th>
<th>difficile</th>
 <th>30</th>
</tr>
<tr>

<th>chapitre4</th>
<th>10</th>
<th>moyen</th>
 <th>45</th>
</tr>
        </tbody> 
    </table>
    </>
  );
};

export default Tableau;
