import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RadioOption from '../ChoixReponsesComponent/RadioOption';
import TypeReponse from '../TypeReponse/TypeReponse';
function QuestionModel(props) {
  const[tabb,setTabb]=useState(props.options)
  const [type,setType] = useState(props.type);
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
              {type == "choiunique" && <TypeReponse type="radio" name={props.nbquestion}/>}
              {type == "multichoix" && <TypeReponse type="checkbox"/>}
            
             <p>{opt}</p>  
            </div>
            )
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>envoyer la réponse</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default QuestionModel;