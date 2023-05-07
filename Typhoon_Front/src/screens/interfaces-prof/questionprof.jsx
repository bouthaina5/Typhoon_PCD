import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './questionprof.css';
import arrow from '../../assets/down-arrow2.png';
import { Link } from 'react-router-dom';
import next from '../../assets/next.png';
import trash from '../../assets/trash.png';
import edit from '../../assets/editing.png';
import data from '../interfaces-communes/BanquesData.json';
import QuestionModel from '../../components/questionModel/QuestionModel';
import MydModalWithGrid from'../../components/scorepopup/scorepopup';
import {Button} from 'primereact/button';
import"primereact/resources/themes/lara-light-indigo/theme.css"
import"primereact/resources/primereact.min.css";
import Table from 'react-bootstrap/Table';
const Tableauquest = () => {
  const{modulename}=useParams();
  const{banquename}=useParams();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalStates, setModalStates] = useState({});
  const[questions,setQuestions]=useState([]);
  const[score,setScore]=useState([]);
  const[modalShoww,setModalShoww]=useState(false)

  useEffect(()=> {
    fetch("http://127.0.0.1:5000/ques" ,{
      method:'POST',
       headers: {
        'Content-Type': 'application/json',
      },
     body:JSON.stringify({banquename}),
     mode : 'cors'   
     })
     .then(response => response.json())
     .then(data => setQuestions(data.données))
     .catch(error => console.error(error));
    }, []);
  console.log(questions);
  
  const handleShowModal = (questionId) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [questionId]: true,
    }));
  };

  const handleHideModal = (questionId) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [questionId]: false,
    }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
     
    fetch('http://127.0.0.1:5000/affichescore',{ mode : 'cors'})
    .then(response => response.json())
    .then(data =>  setScore(data.score)  )  
    setModalShoww(true);
   };
   console.log(score);

  return (

      <div className="table_container">
       <Table className='table-question' striped> 
       <thead>
          <tr className='lig'>
            <th>title</th>
            <th>Auteur</th>
            <th>date de création</th>
            
          </tr>
       </thead>
       <tbody>
      {questions.map((banque) => {
              return (
                <tr>
                  <td key={banque.nbquestion}>
                    <button  onClick={() => handleShowModal(banque.nbquestion)} 
                      style={{border:'none' , backgroundColor:'transparent'}}
                    >
                      {banque.nomquestion}
                      
                    </button>     
                    <QuestionModel
                          des={banque.descriptionquestion}
                          options={banque.options}
                          type={banque.type}
                          nb={banque.nbbanque}
                          nbquestion={banque.nbquestion}
                          show={modalStates[banque.nbquestion]}
                          onHide={() => handleHideModal(banque.nbquestion)}/>
                  </td>  
                  <td>Fadoua Ouamani</td> 
                  <td>06/05/2023</td>
                  
                </tr>)})}
                </tbody>
                </Table>
                <Button onClick={handleSubmit} label='Vérifier' style={{margin:'2rem'}}/>  
                <MydModalWithGrid show={modalShoww} onHide={()=>setModalShoww(false)} score={score}/>
      </div>
  );
};
export default Tableauquest;
