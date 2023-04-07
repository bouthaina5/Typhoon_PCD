import React, { useState } from 'react';
import './banquejouer.css'
const Banquejouer= () => {
    
      return(
        <div>
    

<select className='liste-module'name="liste-module">
<option value="option-1">choisir module</option>
  <option value="option-2">GL</option>
  <option value="option-3">UML</option>
  <option value="option-4">RO</option>
  <option value="option-5">C++</option>
 
</select>
<select className='liste-banque'name="liste-banque">
<option value="option-1">choisir banque</option>
  <option value="option-1">chapitre1</option>
  <option value="option-1">chapitre2</option>
  <option value="option-2">chapitre3</option>
  <option value="option-2">chapitre4</option>
 
</select>
<select className='liste-class'name="liste-class">
<option value="option-1">choisir classe</option>
  <option value="option-1">II1</option>
  <option value="option-1">II2</option>
  <option value="option-2">II3</option>
  <option value="option-2">MASTER</option>
 
</select>
<select className='liste-nbgroupe'name="liste-nbgroupe">
<option value="option-1">nombre de groupes</option>
  <option value="option-1">II1</option>
  <option value="option-1">II2</option>
  <option value="option-2">II3</option>
  <option value="option-2">MASTER</option>
 
</select>
<button class="boutton1">
    envoyer lien
    </button>
    <button class="boutton2">
    commencer jeu
    </button>
    <div className="container">
    <div className="card1">
      <div className="card-header"><h1>Les etudiants connectés</h1></div>
      <div className="card-body">
</div>
</div>
</div></div>
          
   
    
    );
};

export default Banquejouer;