import React, { useState } from 'react';
import './login.css';
import  Example from '../../components/message/message'
const SignUp = () => {
  const [formData, setFormData] = useState({
    nomprenom: '',
   
    email: '',
    password : '',
    confirmemdp:''

  });
const[mess,setMess]=useState(false);
 const [message ,setMessage] = useState('');
 const [smShow, setSmShow] = useState(false);
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
        setMessage('valid email address');
        setSmShow(true);

       console.log(data);

      } else {
        setMessage('Invalid email address');
        
      }})
     console.log(message);
     console.log (formData);
     };
   };
   
 
  const passwordStyle = {
   
    WebkitTextSecurity: "disc", 
   // textSecurity: "disc", //
    color: '#666'
  };
 

  return (

    <div className="conteneur">
      <div className="carte-signup">
        <div className="titre">
          <h2 style={{color:'#617a55'}}>Inscrivez-vous gratuitement </h2>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="cartcorps">
            <div>
              <input
                className="mail"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ color: '#666' }}
                placeholder="Ecrivez votre mail professionnel ici"
                
              />
              
            </div>
            <div>
              <input
                className="mail"
                type="text"
                id="nomprenom"
                name="nomprenom"
                value={formData.nomprenom}
                onChange={handleInputChange}
                style={{ color: '#666' }}
                placeholder="Ecrivez votre nom ici"
              />
              
            </div>
            <div>
              <input
                className="mdp"
                type="text"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                
                
                style={passwordStyle}
                placeholder="mot de passe"
              />
            </div>
            <div>
              <input
                className="mdp"
                type="text"
             
                name="confirmemdp"
                value={formData.confirmemdp}
                onChange={handleInputChange}
                
                placeholder="confirmer mot de passe"
                style={passwordStyle}
              />
              <br></br>
              <div>
  {message === 'Invalid email address' && <span className='err'>Email invalide!</span>}

</div>

            </div>
            <button className="inscription-button" onClick={handleSubmit}  >S'inscrire</button>
            <Example smShow={smShow} onhide={() => setSmShow(false)}/>
          </form>
          <span className="link">
            Vous avez déja un compte? <a style={{cursor:'pointer'}} href='/Login'>connectez vous</a>
          </span>
      
        </div>
      </div>
    </div>
  );
};

export default SignUp;
