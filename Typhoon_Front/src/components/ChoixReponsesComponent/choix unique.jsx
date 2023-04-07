import React, { useState } from 'react';
import './choixUnique.css';
import RadioOption from './RadioOption';
import { AiOutlineDelete } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
const ChoixUnique = (props) => {
  const [optionValue, setOptionvalue] = useState('');
  const [choices, setChoices] = useState([
    { id: 1, index: 'Choix 1', value: { optionValue } },
  ]);

  const handleAddOption = () => {
    setChoices((prevState) => {
      return [
        ...prevState,
        {
          id: prevState.length + 1,
          index: `Choix ${prevState.length + 1}`,
          value: { optionValue },
        },
      ];
    });
  };

  const handleDeleteOption = (id) => {
    const newOptions = choices.filter((option) => option.id != id);
    setChoices(newOptions);
  };
  {
    console.log(choices);
  }
  return (
    <>
      <div className="container1">
        {choices.map((choice, i) => {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <RadioOption
                answerType={props.type}
                choiceIndex={choice.index}
                key={choice.id}
                handleDeleteOption={() => {
                  handleDeleteOption(choice.id);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  handleDeleteOption(choice.id);
                }}
                style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                }}
              >
                <AiOutlineDelete size={'1.5em'} />
              </button>
            </div>
          );
        })}
        <div className="button-container">
          <button
            onClick={handleAddOption}
            type="button"
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            <GrAddCircle size={'2em'} color={'rgba(0, 0, 0, 0.43)'} />
          </button>
        </div>
      </div>
      <p
        style={{
          margin: '1rem',
          color: '#B10808',
        }}
      >
        *Cochez la(es) bonne(s) réponse(s)
      </p>
    </>
  );
};

export default ChoixUnique;
