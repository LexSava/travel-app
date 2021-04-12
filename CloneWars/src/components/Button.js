import React from 'react';
import UpdateAll from "./UpdateAll";
// const PropertiesJson = require("./json/properties.json");

const Button = ({buttonName, target}) => {
    const clName = "button-next";
    const handleClick = () => { UpdateAll(target) };
    
  return <button className={ clName } onClick={ handleClick }>{ buttonName }</button>
}

export default Button;
