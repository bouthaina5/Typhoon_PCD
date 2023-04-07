import React from 'react';
import './AddBanque.css';
import { useState, useEffect } from 'react';
import ChoixUnique from '../../components/ChoixReponsesComponent/choix unique';
import QuestionSpace from '../../components/questionSpace/QuestionSpace';
import { TbSquareRoundedPlusFilled } from 'react-icons/tb';

const AddBanque = () => {
  const [questionList, setQuestionList] = useState([{ id: 1, value: '' }]);

  const handleAddQuestion = () => {
    setQuestionList((prevState) => {
      return [
        ...prevState,
        {
          id: prevState.length + 1,
          value: '',
        },
      ];
    });
  };
  return (
    <div className="outer-container">
      <div className="inner-container">
        <form>
          <label>Entrez le nom du module </label>
          <input
            type="text"
            name="module"
            placeholder="nom du module"
            className="banqueInput"
          />
          <label>Entrez le nom de la banque de questions</label>
          <input
            type="text"
            name="banque"
            placeholder="nom de la banque"
            className="banqueInput"
          />
          <label>Entrez une description courte de la banque</label>
          <input
            type="text"
            name="desc"
            placeholder="description de la banque"
            className="banqueInput"
          />
          {questionList.map((question) => {
            return (
              <QuestionSpace key={question.id} placeholder={question.id} />
            );
          })}
          <button
            type="button"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            title="add question"
            onClick={handleAddQuestion}
          >
            <TbSquareRoundedPlusFilled size={'3em'} color="#43B05C" />
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
            type="submit"
          >
            Terminer
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBanque;
