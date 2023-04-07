import './App.css'
import NavBar from './components/NavBar2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './screens/interfaces-communes/Acceuil'
import Modules from './screens/interfaces-communes/Modules'
import Contact from './screens/interfaces-communes/Contact';
import AddBanque from './screens/interfaces-prof/AddBanque/AddBanque';
import ProfileEtud from './screens/interfaces-etudiant/Profile/ProfileEtud';
import Profile from './screens/interfaces-etudiant/Profile/Profile';

function App() {
    
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route  path='/aaa'  element={<Accueil/>} />
        <Route path='/modules' element={<Modules/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/profile' element={<Profile/>}/> 
        <Route path='/profileEtud' element={<ProfileEtud/>}/>
        <Route path='/addBanque' element={<AddBanque/>}/>
      </Routes>
    </Router>
  )
}

export default App
