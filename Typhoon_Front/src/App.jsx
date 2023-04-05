import './App.css'
import NavBar from './components/NavBar2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './screens/Acceuil'
import Modules from './screens/Modules'
import Contact from './screens/Contact'
import Profile from './screens/Profile/Profile'
import AddBanque from './screens/AddBanque/AddBanque';
import ProfileEtud from './screens/Profile/ProfileEtud'
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
