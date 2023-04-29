import React, { useState } from 'react';
import './banque.css';
import { Link } from 'react-router-dom';
import data from './BanquesData.json';
const Tableau = () => {
  const [formData, setFormData] = useState({
    nom_module: '',
    desc_module: '',
    liste: '',
  });
  const handlChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="global-container">
      <div className="information">
        <label htmlFor="nom_module">nom module</label>

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
          {data.map((banque) => {
            return (
              <tr key={banque.id}>
                <td>
                  {' '}
                  <Link
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to={`/${banque.id}`}
                  >
                    {banque.titre}
                  </Link>
                </td>
                <td>{banque.taille}</td>
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
