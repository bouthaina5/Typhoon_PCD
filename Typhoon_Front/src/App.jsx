import './App.css';
import NavBar from './components/NavBar2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './screens/interfaces-communes/Acceuil';
import Modules from './screens/interfaces-communes/Modules';
import Contact from './screens/interfaces-communes/Contact';
import AddBanque from './screens/interfaces-prof/AddBanque/AddBanque';
import ProfileEtud from './screens/interfaces-etudiant/Profile/ProfileEtud';
import Profile from './screens/interfaces-etudiant/Profile/Profile';
import SignUp from './screens/interfaces-communes/signup.jsx';
import Login from './screens/interfaces-communes/login.jsx';
import Tableau from './screens/interfaces-communes/banque.jsx';
import Infoprof from './screens/interfaces-prof/infoprof.jsx';
import Tableauquest from './screens/interfaces-prof/questionprof.jsx';
import Banquejouer from './screens/interfaces-prof/banquejouer.jsx';
import Infoetu from './screens/interfaces-etudiant/infoetu.jsx';
import Module from './screens/interface-coordinateur/module-res.jsx';
import Jouer from './screens/interfaces-etudiant/jouer.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/aaa" element={<Accueil />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileEtud" element={<ProfileEtud />} />
        <Route path="/addBanque" element={<AddBanque />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Tableau" element={<Tableau />} />
        <Route path="/Tableauquest" element={<Tableauquest />} />
        <Route path="/Jouer" element={<Jouer />} />
        <Route path="/Banquejouer" element={<Banquejouer />} />
        <Route path="/Infoprof" element={<Infoprof />} />
        <Route path="/Infoetu" element={<Infoetu />} />
        <Route path="/Module" element={<Module />} />
      </Routes>
    </Router>
  );
}

export default App;
