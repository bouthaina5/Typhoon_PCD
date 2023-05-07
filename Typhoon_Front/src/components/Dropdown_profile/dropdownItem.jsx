import React from "react";
import './dropdown.css';
import {Link} from 'react-router-dom';
const DropdownItem= (props)=>{
    return (
        <li className="dropdownItem">
            <img src={props.img}></img>
            <a href={props.path}>{props.text}</a>
        </li>
    );
}


export default DropdownItem;