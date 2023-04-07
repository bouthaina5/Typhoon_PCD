import React from 'react';
import '../../screens/AddBanque/AddBanque.css';
import ChoixUnique from '../ChoixReponsesComponent/choix unique';
import { useState, useEffect } from 'react';

const QuestionSpace = (props) => {
  const [choix, setChoix] = useState('');
  const [choixUnique, setChoixUnique] = useState(false);
  const [choixMulti, setChoixMulti] = useState(false);
  
  const handleChange = (e) => {
    setChoix(e.target.value);
  };
  useEffect(() => {
    choix === 'multi' ? setChoixMulti(true) : setChoixMulti(false);
    choix === 'unique' ? setChoixUnique(true) : setChoixUnique(false);
  }, [choix]);
  return (
    <>
      <label>Entrez la question </label>
      <div className="question-container">
        <input
          type="text"
          name="question"
          placeholder={`question ${props.placeholder}`}
          className="banqueInput"
        />
        <select value={choix} onChange={handleChange}>
          <option value="">choose answer type</option>
          <option value="multi">Choix multiple</option>
          <option value="unique">Choix unique</option>
        </select>
      </div>
      <div>
        {choixUnique && <ChoixUnique type="radio" />}
        {choixMulti && <ChoixUnique type="checkbox" />}
      </div>
      <div className="buttons-container">
        <button
          style={{
            color: '#fff',
            backgroundColor: '#D8D8D8',
            border: 'none',
            padding: '1em',
            fontWeight: '700',
            cursor: 'pointer',
          }}
        >
          Annuler
        </button>
        <button
          style={{
            color: '#fff',
            backgroundColor: '#43B05C',
            border: 'none',
            padding: '1em',
            fontWeight: '700',
            cursor: 'pointer',
          }}
        >
          Enregistrer
        </button>
      </div>
    </>
  );
};

export default QuestionSpace;
