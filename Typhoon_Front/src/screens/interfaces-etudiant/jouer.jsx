import React, { useState } from 'react';
import './jouer.css'
import arrow from '../../assets/down-arrow2.png'
import next from '../../assets/next.png'
import trash from '../../assets/trash.png'
import edit from '../../assets/editing.png'
const Jouer = () => {
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

export default Jouer;