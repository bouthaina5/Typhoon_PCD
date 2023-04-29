
import React, { useState } from 'react';
import './signup.css';
import ReactDOM from 'react-dom';



const SignUp = () => {
  const [formData, setFormData] = useState({
    nomprenom: '',
   
    email: '',
    password : ''
  });

 const [message ,setMessage] = useState('');
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
 
 
 const handleSubmit = async(e) => {
    e.preventDefault();
     
    if (formData){
     const response = await fetch("http://127.0.0.1:5000/signup" ,{
      method:'POST',
       headers: {
        'Content-Type': 'application/json',

      },
     body:JSON.stringify(formData),
     mode : 'cors'
   
      
     })
     .then(response => response.json())
   
     .then(data => {
      if (data.val === "valide") {
       console.log(data);

      } else {
        setMessage('Invalid email address');
        
      }})
     console.log(message);
     console.log (formData);
     };
   };
   
 
  const passwordStyle = {
    fontFamily: "Arial",
    letterSpacing: "0.3em",
    WebkitTextSecurity: "disc", // Pour les navigateurs basés sur Webkit (Chrome, Safari)
   // textSecurity: "disc", //
    color: '#666'// Pour les navigateurs basés sur Blink (Firefox, Edge)
  };
  return (
    
    <div className="container">
    <div className="card">
      <div className="card-header"><h1>Inscrivez -vous gratuitement </h1></div>
      <div className="card-body">
      
   

    <form onSubmit={handleSubmit}  >
      <div>
        
        <input className='nom'
          type="text"
          id="nomprenom"
          name="nomprenom"
          value={formData.nomprenom}
          onChange={handleInputChange}
          placeholder='nom'
          style={{ color: '#666' }}
      
        />
       
      </div>
      
      <div>
        
        <input className={message !== '' ? 'emailerror' : 'email'}
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder='email'
          style={{ color: '#666' }}
        />
       {message != '' && <div className='messagerreur'>{message}</div>}

      </div>
      <div><input className='motdepasse'
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          style={passwordStyle}
          placeholder='mot de passe *'
        /></div>
      
    </form>
    <button className=" compte" onClick={handleSubmit}>
   créer compte
    </button>
  

    </div>
    </div>
    </div>
    
    
  );
};

export default SignUp;


