import { NavLink } from 'react-router-dom';
import './CardStyle.css';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Card = (props) => {

  return (
    <div className="container">
      <div className="card">
        <div class="card__side card__side--front card__side--front-1">  
        <div className="card_color"></div>
          <h4 className="card__heading">
            <span className="card__h-span-1" style={{fontFamily:'Georgia'}}>{props.moduleName}</span>
          </h4>
          <div class="card__details">
            <ul>
              <li>
                <b>Niveau:</b>
              {props.niveau}
              </li>
              <li>
                <b>Semestre: </b> {props.semestre}
              </li>
              <li>
              <b>Volume horaire: </b> {props.volumehoraire} H
              </li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <div className='backside__container'>
          <h4 className="Objectifs_Title" style={{fontFamily:'Georgia',fontSize:'20px'}}>Les objectifs du module</h4>
            <div className='back__side__details'>
            <p style={{fontFamily:'Georgia',fontSize:'15px'}}>Ce paragraphe contient les objectifs du module</p>
            </div>
          </div>
            <div className='button_container'>
            <button className='more_info_button' >
              <NavLink to ={`/modules/${props.moduleName}`}> <p style={{ maxWidth: '100%' }}>Accéder aux banques</p></NavLink>
               <AiOutlineArrowRight size={'1.5em'} color="#617a55" />
            </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
