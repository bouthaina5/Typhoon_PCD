import { NavLink } from 'react-router-dom';
import './CardStyle.css';
import { Link } from 'react-router-dom';
const Card = (props) => {

  return (
    <div class="container">
      <div class="card">
        <div class="card__side card__side--front card__side--front-1">  
          <img  src={props.image} className='card__pic' />
          <h4 class="card__heading">
            <span class="card__h-span-1">{props.moduleName}</span>
          </h4>
          <div class="card__details">
            <ul>
              <li>Niveau:{props.niveau}</li>
              <li>Semestre: {props.semestre}</li>
              <li>Volume horaire: {props.volumehoraire} H</li>
            </ul>
          </div>
        </div>
        <div class="card__side card__side--back card__side--back-1">
          <div className='backside__container'>
            <h4 >
              <p className="Objectifs_Title">Les Objectifs du module</p>
            </h4>
            <div className='back__side__details'>
            <ul>
              <li>
                {props.objectif[0]}
              </li>
              <li>
              {props.objectif[1]}
              </li>
              <li>
              {props.objectif[2]}
              </li>
            </ul>
            <div className='button_container'>
            <button className='more_info_button' >
              <NavLink to ={`/modules/${props.moduleName}`}>plus d'info</NavLink>
                
            </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
