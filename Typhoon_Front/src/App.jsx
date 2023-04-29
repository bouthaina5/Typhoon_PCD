import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import SignUp from './screens/interfaces-communes/signup.jsx'

import Login from './screens/interfaces-communes/login.jsx'
import Tableau from './screens/interfaces-communes/banque.jsx'
import Infoprof from './screens/interfaces-prof/infoprof.jsx'
import Tableauquest from './screens/interfaces-prof/questionprof.jsx'
import Banquejouer from './screens/interfaces-prof/banquejouer.jsx';
import Infoetu from './screens/interfaces-etudiant/infoetu.jsx'
import Module from './screens/interface-coordinateur/module-res.jsx';
import Jouer from './screens/interfaces-etudiant/jouer.jsx';

function App(){
  

  return (
   <Router>
   <Module/>
  <Routes>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/Tableau' element={<Tableau/>}/>
    <Route path='/Tableauquest' element={<Tableauquest/>}/>
    <Route path='/Jouer' element={<Jouer/>}/>
    <Route path='/Banquejouer' element={<Banquejouer/>}/>
    <Route path='/Infoprof' element={<Infoprof/>}/>
    <Route path='/Infoetu' element={<Infoetu/>}/>
    <Route path='/Module' element={<Module/>}/>
  </Routes>

  </Router> 


  

  
  )
}

export default App
