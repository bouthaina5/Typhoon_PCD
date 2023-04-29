import React, { useEffect, useMemo } from 'react';
import Card from '../../components/ModuleCards/Card';
import data from '../Data.json';
import { useState } from 'react';
import Filter from '../../components/Filter/Filter';

const Modules = () => {
  const [moduleList, setModuleList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  // Add default value on page load
  useEffect(() => {
    setModuleList(data);
    // getbase();
  }, []);
  const getbase = async () => {
    const response = await fetch('http://127.0.0.1:5000/carte', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  };
  //Function to get filtered list
  function getFilteredList() {
    if (!selectedCategory) {
      return moduleList;
    }
    return moduleList.filter((item) => item.Niveau === selectedCategory);
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
              key={item.id}
              moduleName={item.moduleName}
              niveau={item.Niveau}
              volumehoraire={item.volumehoraire}
              semestre={item.semestre}
              objectif={item.objectif}
              image={item.image}
            />
          );
        })}
      </div>
    </>
  );
};
export default Modules;
