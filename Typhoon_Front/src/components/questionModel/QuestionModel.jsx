import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RadioOption from '../ChoixReponsesComponent/RadioOption';
import TypeReponse from '../TypeReponse/TypeReponse';
function QuestionModel(props) {
  const[tabb,setTabb]=useState(props.options)
  const [type,setType] = useState(props.type);
  const[choixunique,setChoixunique]=useState([]);
  const[choixmulti,setChoixmulti]=useState([]);
  const [formData, setFormData] = useState({
    nbquestion:props.nbquestion,
    nbbanque:props.nb,
  choixunique: choixunique,
    choixmulti: choixmulti,
    
      });

      const handleInputChangechoixunique = (event) => {
        setChoixunique((prevState) => {
          return [
            ...prevState,
            event.target.value
           
          ];
        });};
    const handleInputChangechoixmulti = (event) => {
      setChoixmulti((prevState) => {
        return [
          ...prevState,
          event.target.value
         
        ];
      });};
   
    const handleSubmit = async(e) => {
      e.preventDefault();
       if (choixunique!=''){
     
       await fetch("http://127.0.0.1:5000/jouer" ,{
        method:'POST',
         headers: {
          'Content-Type': 'application/json',
  
        },
       body:JSON.stringify({"choix":choixunique,"nbbanque":props.nb,"nbquestion":props.nbquestion,"type":props.type}),
       mode : 'cors'
     
        
       })
      }
      
       else {
        await fetch("http://127.0.0.1:5000/jouer" ,{
          method:'POST',
           headers: {
            'Content-Type': 'application/json',
    
          },
         body:JSON.stringify({"choix":choixmulti,"nbbanque":props.nb,"nbquestion":props.nbquestion,"type":props.type}),
         mode : 'cors'
       
          
         })

       }

      };





    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.des}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {tabb.map((opt) => {
          return(
            <div>
              {type == "choiunique" && <TypeReponse type="radio" name={props.nbquestion} value={opt} onChange={handleInputChangechoixunique } />}
              {type == "multichoix" && <TypeReponse type="checkbox" value={opt} onChange={handleInputChangechoixmulti }/>}
            
             <p>{opt}</p>  
            </div>
            )
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ handleSubmit}>Confirmer</Button>
      </Modal.Footer>
    </Modal>
  );
      }
export default QuestionModel;