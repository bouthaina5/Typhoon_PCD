import React, { useEffect, useMemo,useCallback } from 'react';
import Card from '../../components/ModuleCards/Card';
//import data from '../Data.json';
import { useState } from 'react';
import Filter from '../../components/Filter/Filter';

const Modules = () => {
  const [moduleList, setModuleList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
 
 
  const [mod, setMod] = useState([]);
  const fetchModuleList = useCallback(()=>{
    fetch('http://127.0.0.1:5000/carte',{ mode : 'cors'})
    .then(response => response.json())
    .then(data =>    setModuleList(data.données))

  },[]);

  useEffect(() => {
    fetchModuleList()
       }, [fetchModuleList]);
 
  //Function to get filtered list
  function getFilteredList() {
    if (!selectedCategory) {
      return moduleList;
    }
     return moduleList.filter((item) => item.niveau === selectedCategory);
  }
  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, moduleList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  return (
    <>
      <div
        style={{ 
          display: 'flex',
          margin: '3em',
          justifyContent: 'flex-start',
          marginRight: '5em',
        }}
      >
        <Filter handleChange={handleCategoryChange} />
      </div>

      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          gridTemplateColumns: `repeat(4, 1fr)`,
          margin: `3em`,
          marginTop: `4em`,
          columnGap: `1em`,
          // rowGap:50, 
        }}
      >
        {filteredList.map((item) => {
           return (
            <Card 
              moduleName={item.nom}
              niveau={item.niveau}  
              volumehoraire={item.nombreheures}
              semestre={item.semester}
              objectif={item.objectifs}
            />
          );
        })}
      </div>
    </>
  );
};
export default Modules;
