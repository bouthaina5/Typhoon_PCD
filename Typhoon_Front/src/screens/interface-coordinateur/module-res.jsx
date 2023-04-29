import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ModuleService from '../../services/ModuleService';
import './module-res.css';

const CreateModule = () => {
  const history = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nommodule: '',
    nbrheures: '',
    objectifs: '',
    compétences: '',
  });

  // useEffect(() => {
  //   if (id !== '_add') {
  //     ModuleService.getModuleById(id).then((res) => {
  //       const module = res.data;
  //       setFormData({
  //         nommodule: module.nommodule,
  //         nbrheures: module.nbrheures,
  //         objectifs: module.objectifs,
  //         compétences: module.compétences,
  //       });
  //     });
  //   }
  // }, [id]);

  // const saveOrUpdateModule = (e) => {
  //   e.preventDefault();
  //   if (id === '_add') {
  //     ModuleService.createModule(module).then(() => {
  //       history.push('/modules');
  //       console.log('succès');
  //     });
  //   } else {
  //     ModuleService.updateModule(module, id).then(() => {
  //       history.push('/modules');
  //     });
  //   }
  // };

  // const cancel = () => {
  //   history.push('/modules');
  // };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData) {
      const response = await fetch('http://127.0.0.1:5000/modules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors',
      });
      console.log(formData);
    }
  };

  return (
    <div className="outer-container">
      <form>
        <div className="cartee">
          <input
            className="text-input"
            type="text"
            id="nommodule"
            name="nommodule"
            value={formData.nommodule}
            onChange={handleInputChange}
            style={{ color: '#666' }}
            placeholder="nom du module"
          />
          <br></br>
          <div className="inner-select">
            <select
              className="select-input"
              name="liste-niveau"
              style={{ width: '150px', marginRight: '1rem' }}
            >
              <option value="option-1">Niveau</option>
              <option value="option-2">II1</option>
              <option value="option-3">II2</option>
              <option value="option-4">II3</option>
              <option value="option-5">MASTER</option>
            </select>
            <br></br>
            <select
              className="select-input"
              name="liste-semester"
              style={{ width: '150px', marginRight: '1rem' }}
            >
              <option value="option-1">Semestre</option>
              <option value="option-2">1</option>
              <option value="option-3">2</option>
              <option value="option-4">3</option>
              <option value="option-5">4</option>
              <option value="option-5">5</option>
            </select>
          </div>
          <br></br>
          <input
            type="text"
            className="text-input"
            id="nbrheures"
            name="nbrheures"
            value={formData.nbrheures}
            onChange={handleInputChange}
            style={{ color: '#666' }}
            placeholder="nombre d'heures du module"
          />
          <br></br>

          <select className="select-input" name="liste-resp">
            <option value="option-1">Responsable module</option>
            <option value="option-2">1</option>
            <option value="option-3">2</option>
            <option value="option-4">3</option>
            <option value="option-5">4</option>
            <option value="option-5">5</option>
          </select>
          <br></br>

          <input
            type="text"
            className="text-input"
            id="objectifs"
            name="objectifs"
            value={formData.objectifs}
            onChange={handleInputChange}
            style={{ color: '#666' }}
            placeholder="objectifs du module"
          />
          <br></br>
          <input
            type="text"
            className="text-input"
            id="compétences"
            name="compétences"
            value={formData.compétences}
            onChange={handleInputChange}
            style={{ color: '#666' }}
            placeholder="compétences à aquérir"
          />
          <br></br>
          <button className="enregistrer" onClick={handleSubmit}>
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateModule;
