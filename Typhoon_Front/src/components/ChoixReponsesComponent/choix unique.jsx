import React, { useState } from 'react';
import './choixUnique.css';
import RadioOption from './RadioOption';
const ChoixUnique = () => {
  const [choices, setChoices] = useState(['choix 1']);

  const handleAddOption = () => {
    setChoices((prevState) => {
      return [...prevState, `Choix ${prevState.length + 1}`];
    });
  };
  return (
    <div className="container1">
      {choices.map((choice) => {
        <RadioOption choiceIndex={choice} />;
      })}
      <div className="button-container">
        <button onClick={handleAddOption}>Add option</button>
      </div>
    </div>
  );
};

export default ChoixUnique;
