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
const Tableauquest = () => {
  const{modulename}=useParams();
  const{banquename}=useParams();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalStates, setModalStates] = useState({});
  const[questions,setQuestions]=useState([])
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
  return (

      <div className="table_container">
       <table className='table-question'> 
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
                          nbquestion={banque.nbquestion}
                          show={modalStates[banque.nbquestion]}
                          onHide={() => handleHideModal(banque.nbquestion)}/>
                  </td>  
                  <td>Fadoua Ouamani</td> 
                  <td>06/05/2023</td>
                  
                </tr>)})}
                </tbody>
                </table>
      </div>
  );
};
export default Tableauquest;
