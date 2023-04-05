import React from "react";
import './choixUnique.css';
const RadioOption = (props)=>{
    return(
        <div className="option-container">
            <input type="radio" className="option-input"></input>
            <input type="text" placeholder={props.choiceIndex} className="option-answer"></input> 
        </div>
    )
}

export default RadioOption;