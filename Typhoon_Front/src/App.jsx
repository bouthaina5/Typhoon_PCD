import './App.css';
import NavBar from './components/NavBar2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './screens/interfaces-communes/Acceuil';
import Modules from './screens/interfaces-communes/Modules';
import Contact from './screens/interfaces-communes/Contact';
import AddBanque from './screens/interfaces-prof/AddBanque/AddBanque';
import ProfileEtud from './screens/interfaces-etudiant/Profile/ProfileEtud';
import Profile from './screens/interfaces-etudiant/Profile/Profile';
import Login from './screens/interfaces-communes/login';
import SignUp from './screens/interfaces-communes/signup';
import Tableau from './screens/interfaces-communes/banque';
import Banquejouer from './screens/interfaces-prof/banquejouer';
import Tableauquest from './screens/interfaces-prof/questionprof';
import CreateModule from './screens/interface-coordinateur/module-res';
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
        <Route path="/login" element={<Login />} />
        <Route path="/signUP" element={<SignUp />} />
        <Route path="/modules/:modulename" element={<Tableau />} />
        <Route path="/lancer_jeu" element={<Banquejouer />} />
        <Route path="/modules/:modulename/:banquename" element={<Tableauquest />} />
        <Route path="/addModule" element={<CreateModule />} />
      </Routes>
    </Router>
  );

}

export default App;
