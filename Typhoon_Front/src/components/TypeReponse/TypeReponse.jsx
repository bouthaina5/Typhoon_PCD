import React from "react";

const TypeReponse = (props)=>{
    return (
       <input type={props.type} name={props.name} value={props.value} onChange={props.onChange}/> 
    )
}

export default TypeReponse;