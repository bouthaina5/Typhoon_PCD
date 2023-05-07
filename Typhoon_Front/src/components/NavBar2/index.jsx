import React from 'react';
import "primeicons/primeicons.css"
import"primereact/resources/themes/lara-light-indigo/theme.css"
import"primereact/resources/primereact.min.css"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavBar2';
import tornado from '../../assets/tornado.png'
import Dropdown from '../Dropdown_profile/dropdown';
const NavBar = () => {
    return (
      <>
        <Nav>
          <Bars />
          <NavMenu>
          <img src={tornado} className='typhoon-logo' style={{
            padding: 3,
            width : 40 ,
            height : 40,
            display:'flex',
            alignItems:'center',
          }}/>
            <NavLink to='/accueil'  activeStyle >
              
     <i className='pi pi-fw pi-home'></i>
              Accueil
            </NavLink>
            <NavLink to='/modules' activeStyle>
             <i className=' pi pi-fw pi-book'></i>
              Modules
            </NavLink>
            <NavLink to='/contact' activeStyle >
            <i className='pi pi-fw pi-phone'></i>
              Contact
            </NavLink>
            <Dropdown />
          </NavMenu>
        </Nav>
      </>
    );
  };
    
  export default NavBar;