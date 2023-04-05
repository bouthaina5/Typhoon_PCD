import React from 'react';
import './AddBanque.css';
import { useState, useEffect } from 'react';
import ChoixUnique from '../../components/ChoixReponsesComponent/choix unique';
const AddBanque = () => {
  const [choix, setChoix] = useState('');
  const [choixUnique, setChoixUnique] = useState(false);
  const [choixMulti, setChoixMulti] = useState(false);
  const handleChange = (e) => {
    setChoix(e.target.value);
  };
  useEffect(() => {
    choix === 'multi' ? setChoixMulti(true) : setChoixMulti(false)
    choix === 'unique' ? setChoixUnique(true) : setChoixUnique(false)
  }, [choix]);

  return (
    <div className="outer-container">
      <div className="inner-container">
        <form>
          <label>Entrez le nom du module </label>
          <input type="text" name="module" placeholder="nom du module" className='banqueInput'/>
          <label>Entrez le nom de la banque de questions</label>
          <input type="text" name="banque" placeholder="nom de la banque" className='banqueInput'/>
          <label>Entrez une description courte de la banque</label>
          <input
            type="text"
            name="desc"
            placeholder="description de la banque"
            className='banqueInput'
          />
          <label>Entrez la question</label>
          <div className="question-container">
            <input
              type="text"
              name="question"
              placeholder="Ajouter une question"
              className='banqueInput'
            />
            <select value={choix} onChange={handleChange}>
              <option value="">choose answer type</option>
              <option value="multi">Choix multiple</option>
              <option value="unique">Choix unique</option>
            </select>
          </div>
          <div>
            {choixUnique && <ChoixUnique />}
            {choixMulti && <p>choix multiple</p>}
          </div>
          <div className="buttons-container">
            <button>Annuler</button>
            <button>Enregistrer</button>
          </div>
          <button>Terminer</button>
        </form>
      </div>
    </div>
  );
};

export default AddBanque;
