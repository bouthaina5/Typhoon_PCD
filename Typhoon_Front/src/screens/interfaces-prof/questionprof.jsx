import React, { useState } from 'react';
import './questionprof.css'
import arrow from '../../assets/down-arrow2.png'
import { Link } from 'react-router-dom';
import next from '../../assets/next.png'
import trash from '../../assets/trash.png'
import edit from '../../assets/editing.png'
const Tableauquest = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [angle, setAngle] = useState(0);
 const [rotate, setRotate] = useState(0);
 const [linePosition, setLinePosition] = useState({});
 function handleClick1(event) {
    setRotate(angle + 180);
    setAngle( angle+rotate);
    const image = event.target;
   /* const id = image.id;
  const img = document.getElementById(id);*/
  image.style.transform = `rotate(${rotate}deg)`; 
  
  const row = image.closest('tr');
  const rowIndex = row.rowIndex;
  const parentRect =row.getBoundingClientRect();
setLinePosition({
    top:parentRect.top,
    height:parentRect.height,
    left:parentRect.left,
  });
  setShowPopup(!showPopup);
}

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
        <table class="table-question">
      <thead>
        <tr class="lig">
         
         <th></th>
          <th>Auteurs</th>
          <th>Date de création</th>
            <th></th>
        </tr>
      </thead>
     <tbody>
     
        <tr className={showPopup ? "popup-visible" : ""}>
           
          <td ><img src={arrow} alt="image"style={{width :30,height:30}}className='arrow' data-index='0' onClick={handleClick1} id='image1'  />
        
         Question1</td>
          <td>B.Y Nessrine</td>
          <td >23/01/2023</td>
           <td style={{ paddingRight: '-5px' ,textAlign: 'right' }}>
            <div className='image'>
            <img src={trash} alt="image" style={{width :20,height:20}}   /> 
           <img src={edit} alt="image" style={{width :20,height:20}}  /></div></td> 
           
        </tr>
        <tr className={showPopup ? "popup-vis" : ""}>
           
           <td ><img src={arrow} alt="image"style={{width :30,height:30}} className='arrow' onClick={handleClick1} id='image1'  />
         
          Question2</td>
           <td>B.Y Nessrine</td>
           <td >23/01/2023</td>
            <td style={{ paddingRight: '-5px' ,textAlign: 'right' }}>
             <div className='image'>
             <img src={trash} alt="image" style={{width :20,height:20}}  /> 
            <img src={edit} alt="image" style={{width :20,height:20}}  /></div></td> 
            
         </tr>
         <tr className={showPopup ? "popup-visible2" : ""}>
           
           <td ><img src={arrow} alt="image"style={{width :30,height:30}} className='arrow' onClick={handleClick1} id='image1'  />
         
          Question1</td>
           <td>B.Y Nessrine</td>
           <td >23/01/2023</td>
            <td style={{ paddingRight: '-5px' ,textAlign: 'right' }}>
             <div className='image'>
             <img src={trash} alt="image" style={{width :20,height:20}}   /> 
            <img src={edit} alt="image" style={{width :20,height:20}}  /></div></td> 
            
         </tr>
        


        </tbody> 
    </table>
    {showPopup &&(
      
        <div className="popup"style={{top:linePosition.top+linePosition.height,left: linePosition.left,height:200}}>
          <div className="popup-content">
            
            <form>
              <h5>facebook app est :</h5>
              <div className='radio-group'>
              <input type="radio"  id='radio1'name="option"/>
              <label for="radio1">client leger</label><br></br>
               <input type="radio" id='radio2'name="option"/>
               <label for="radio2"> client lourd</label><br></br>
              <input type="radio"id='radio3' name="option"/>
              <label for="radio3">client riche</label></div>
            </form>
          </div>
        </div>
      )}
  
      
     </div>
  );
};

export default Tableauquest;
