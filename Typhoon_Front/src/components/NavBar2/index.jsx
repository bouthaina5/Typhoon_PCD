import React from 'react';
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
            <NavLink to='/accueil' activeStyle>
              Accueil
            </NavLink>
            <NavLink to='/modules' activeStyle>
              Modules
            </NavLink>
            <NavLink to='/contact' activeStyle>
              Contact
            </NavLink>
            <Dropdown />
          </NavMenu>
        </Nav>
      </>
    );
  };
    
  export default NavBar;