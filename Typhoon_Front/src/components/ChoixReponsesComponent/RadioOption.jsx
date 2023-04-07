import React from 'react';
import './choixUnique.css';

const RadioOption = (props) => {
  return (
    <div className="out-container">
      <div className="option-container">
        <input
          type={props.answerType}
          className="option-input"
          name="optionunique"
        ></input>
        <input
          type="text"
          placeholder={props.choiceIndex}
          className="option-answer"
        ></input>
      </div>
    </div>
  );
};

export default RadioOption;
