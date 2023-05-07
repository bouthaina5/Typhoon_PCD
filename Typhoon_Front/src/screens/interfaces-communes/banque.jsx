import React, { useState , useEffect} from 'react';
import {Fieldset} from  "primereact/fieldset";
import './banque.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import data from './BanquesData.json';
import"primereact/resources/themes/lara-light-indigo/theme.css"
import"primereact/resources/primereact.min.css"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import Table from 'react-bootstrap/Table';
import {Rating} from 'primereact/rating';
import PrimeReact from 'primereact/api';

const Tableau = () => {
  const [val,setVal]=useState(null)
  const [formData, setFormData] = useState({
    nom_module: '',
    desc_module: '',
    liste: '',
  });
  const{modulename}=useParams();
  const handlChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const[banques,setBanques]=useState([]);
 useEffect(()=> {
  fetch("http://127.0.0.1:5000/ban" ,{
    method:'POST',
     headers: {
      'Content-Type': 'application/json',

    },
   body:JSON.stringify({modulename}),
   mode : 'cors'
 
    
   })
   .then(response => response.json())
   .then(data => setBanques(data.données))
   .catch(error => console.error(error));
         
  }, []);
  function ToggleableDemo(){
    return(
        <Fieldset legend={modulename} toggleable>
          <p>
          La finance nourrit un objectif : maximiser la valeur de l'entreprise 
          pour ses actionnaires à long-terme. Il s'agit, en d'autres termes, de 
          maximiser les profits sur un horizon temporel relativement long tout en limitant les risques encourus.
          </p>
        </Fieldset>
    )
  }
  return (
    <div className="global-container">
     < ToggleableDemo/> 
      <div className="tri">
        <select className="liste-deroulante1" name="liste-deroulante1">
          <option value="option-1">Taille</option>
          <option value="option-1">croissante</option>
          <option value="option-2">decroissante</option>
        </select>
        <select className="liste-deroulante2" name="liste-deroulante2">
          <option value="option-1">Difficulté</option>
          <option value="option-1">facile</option>
          <option value="option-2">moyenne</option>
          <option value="option-2">difficile</option>
        </select>
        <select className="liste-deroulante3" name="liste-deroulante3">
          <option value="option-1">Rating</option>
          <option value="option-1">croissant</option>
          <option value="option-2">décroissant</option>
        </select>{' '}
      </div>
      <Table striped>
        <thead>
          <tr className='ligne1'>
            <th >Titre</th>
            <th>Taille</th>
            <th>Difficulté</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {banques.map((banque) => {
            return (
              <tr key={banque.id}>
                <td>
                  {' '}
                  <Link
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to={`/modules/${banque.nom}/${banque.nbbanque}`}
                  >
                    {banque.nombanque}
                  </Link>
                </td>
                <td>16</td>
                <td>{banque.difficulté}</td>
                <td><Rating value={val} onChange={(e)=> setVal(e.val)}  cancel={false} /> </td>
              </tr>
            );
          })}
        </tbody>
      </Table> 
    </div>
  );
};

export default Tableau;
