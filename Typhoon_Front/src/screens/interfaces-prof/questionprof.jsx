import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './questionprof.css';
import arrow from '../../assets/down-arrow2.png';
import { Link } from 'react-router-dom';
import next from '../../assets/next.png';
import trash from '../../assets/trash.png';
import edit from '../../assets/editing.png';
import data from '../interfaces-communes/BanquesData.json';
const Tableauquest = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [angle, setAngle] = useState(0);
  const [rotate, setRotate] = useState(0);
  const{modulename}=useParams();
  const{banquename}=useParams();


  const [linePosition, setLinePosition] = useState({});
  function handleClick1(event) {
    setRotate(angle + 180);
    setAngle(angle + rotate);
    const image = event.target;
    /* const id = image.id;
  const img = document.getElementById(id);*/
    image.style.transform = `rotate(${rotate}deg)`;

    const row = image.closest('tr');
    const rowIndex = row.rowIndex;
    const parentRect = row.getBoundingClientRect();
    setLinePosition({
      top: parentRect.top,
      height: parentRect.height,
      left: parentRect.left,
    });
    setShowPopup(!showPopup);
  }
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

  /*function handleClick2 (event) {
  const row = event.target.closest('tr'); // Trouve l'élément 'tr' parent de l'image cliquée
  row.parentNode.removeChild(row); // Supprime le parent 'tr' de l'image
}*/

  /*function handleClick3 (event) {
  const row = event.target.closest('tr'); // Trouve l'élément 'tr' parent de l'image cliquée
  const cells = row.getElementsByTagName('td'); // Récupère tous les éléments 'td' enfants de la ligne

  for (let i = 0; i < cells.length; i++) {
    cells[i].contentEditable = true; // Active le mode édition pour chaque cellule
  }
}*/
  return (
    <div>
      

      <div className="table_container">
        <table className="table-question">
          <thead>
            <tr class="lig">
              <th></th>
              <th>Auteurs</th>
              <th>Date de création</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {questions.map((banque) => {
              return (
                <tr>
                  <td>{banque.nomquestion}</td>
                  <td>{banque.type}</td>
                  <td>{}</td>
                  <td></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div
          className="popup"
          style={{
            top: linePosition.top + linePosition.height,
            left: linePosition.left,
            height: 200,
          }}
        >
          <div className="popup-content">
            <form>
              <h5>facebook app est :</h5>
              <div className="radio-group">
                <input type="radio" id="radio1" name="option" />
                <label for="radio1">client leger</label>
                <br></br>
                <input type="radio" id="radio2" name="option" />
                <label for="radio2"> client lourd</label>
                <br></br>
                <input type="radio" id="radio3" name="option" />
                <label for="radio3">client riche</label>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tableauquest;
