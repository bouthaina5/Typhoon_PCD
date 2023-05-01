import React from 'react';
import './AddBanque.css';
import { useState, useEffect } from 'react';
import QuestionSpace from '../../../components/questionSpace/QuestionSpace';
import { TbSquareRoundedPlusFilled } from 'react-icons/tb';
const AddBanque = () => {
  const [questionList, setQuestionList] = useState([{ id: 1, value: '' }]);
  const [mod, setMod] = useState('');
  const [formData, setFormData] = useState({
    nombanque:'',
    descriptionbanque:'',
  });
  const [data, setData] = useState([]);
  const [questions,setQuestions]=useState([]);
  const [options,setOptions]=useState([]);
  const [option,setOption]=useState('');

  const[nomquestion,setNomquestion]=useState('');
 
  const BanqueData = {
    nommodule: mod,
    nombanque: formData.nombanque,
    descriptionbanque:formData.descriptionbanque,
  qes:nomquestion,
  op:options


  };
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handlequestionChange = (event) => {
    setNomquestion(
     
      event.target.value,
    );
  };
 /* const handleoptionChange = (event) => {
    const newoption =event.target.value;
    setOption(newoption);
     
    
    /*setOptions((prevState) => {
      return [
        ...prevState,
        newoption
       
      ];
    });
  };*/
  const handleoptionChange = (event) => {
    const newoption = event.target.value;
    
    setOption(newoption);
  };

  

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
  
  const handleInputChangenmodule = (event) => {
    setMod(
      event.target.value
      
    );};

  useEffect(() => {
    fetch('http://127.0.0.1:5000/addbanque',{ mode : 'cors'})
      .then(response => response.json())
      .then(data => setData(data.module))
      .catch(error => console.error(error));
       
  }, []);
  console.log(data);
  const handleSubmit = async(e) => {
    e.preventDefault();
     
    if (formData){
     const response = await fetch("http://127.0.0.1:5000/addbanque2" ,{
      method:'POST',
       headers: {
        'Content-Type': 'application/json',

      },
     body:JSON.stringify(BanqueData),
     mode : 'cors'
   
      
     })
     
    
     };
     console.log(BanqueData);
   };

   const handletab = () => {
    setOptions((prevState)=>{
      return [
        ...prevState, option
      ]
    })
  };
  
  return (
    <div className="outer-container">
      <div className="inner-container">
        <form onSubmit={handleSubmit}>
          {/* <label>Entrez le nom du module </label> */}
          {/* <input
            type="text"
            name="module"
            placeholder="nom du module"
            className="banqueInput"
          /> */}
          <select className="module-select" value ={mod} onChange={handleInputChangenmodule}>
            <option>choisir module</option>
            {
              data.map((item)=>{
                return <option >{item}</option>
              })
            }
          </select>
          <label>Entrez le nom de la banque de questions</label>
          <input
            type="text"
            name="nombanque"
            placeholder="nom de la banque"
            className="banqueInput"
            value={formData.nombanque}
            onChange ={handleInputChange}
          />
          <label>Entrez une description courte de la banque</label>
          <input
            type="text"
            name="descriptionbanque"
            placeholder="description de la banque"
            className="banqueInput"
            value={formData.descriptionbanque}
            onChange ={handleInputChange}
          />
          {questionList.map((question) => {
            return (
              <QuestionSpace 
              key={question.id} 
              placeholder={question.id} 
              handleChangequestion={ handlequestionChange} 
              handleoption={handleoptionChange}
              tab = {handletab()} />
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
