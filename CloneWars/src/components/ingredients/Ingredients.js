import React from 'react';
import ModeHeader from "../modeHeader";
import IngredientsList from './ingredientsList'
// import Header from './components/header/header';
// import reportWebVitals from './reportWebVitals';
const PropertiesJson = require("../json/properties.json");

const localProp = JSON.parse(localStorage.getItem("hgp-properties"));

if (localProp) {
  PropertiesJson.language = localProp.language;
  PropertiesJson.theme = localProp.theme;
  PropertiesJson.mode = localProp.mode;
  }

const Ingredients = () => {

    return (  
    <div className = "ingredients">
      <ModeHeader mode={ 'ingredients' }/>            
      <IngredientsList />
    </div>
    )
}



export default Ingredients;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
