import React from "react";
import './dropdown.css';
import avatar from '../../assets/avatar.png';
import logout from '../../assets/logout.png';
import changepsw from '../../assets/changepsw.png';
import editProfile from '../../assets/editProfile.png';
import DropdownItem from "./dropdownItem";
import { useState } from "react";
const Dropdown = ()=>{
    const [open,setOpen]=useState(false)
    return(
        <div>
            <div className="menu-container">
                <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
                    <img src={avatar}/>
                </div>
                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                    <h3>Bouthaina BEN Hamida<br/><span>Student</span></h3>
                    <ul>
                        <DropdownItem img={avatar} text={'My Profile'} path={'/profileEtud'}/>
                        <DropdownItem img={editProfile} text={'Edit Profile'} path={'/edit'}/>
                        <DropdownItem img={changepsw} text={'Edit password'} path={'/editpsw'}/>
                        <DropdownItem img={logout} text={'Logout'} path={'/logout'}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;