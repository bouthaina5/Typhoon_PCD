import React, { useState , useEffect} from 'react';

import './banque.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import data from './BanquesData.json';
const Tableau = () => {
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
  return (
    <div className="global-container">
      <div className="information">
        <label htmlFor="nom_module">nom module</label>
<h4>{modulename}</h4>

        <label htmlFor="desc_module">description module</label>

        <label htmlFor="liste">liste des professeurs du module</label>
      </div>

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

      <table className="table-conteneur">
        <thead>
          <tr className="ligne1">
            <th>Titre</th>
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
                <td>{}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tableau;
