import React from 'react';
import ModeHeader from "../modeHeader";
// import FamilyModes from './FamilyModes'
// import Header from './components/header/header';
// import reportWebVitals from './reportWebVitals';
const PropertiesJson = require("../json/properties.json");

const localProp = JSON.parse(localStorage.getItem("hgp-properties"));
if (localProp) {
  PropertiesJson.language = localProp.language;
  PropertiesJson.theme = localProp.theme;
  PropertiesJson.mode = localProp.mode;
  }

const Storages = () => {

    return (  
    <div className = "storages">
      <ModeHeader mode={ 'storages' }/>            
      {/* <FamilyModes /> */}
    </div>
    )
}



export default Storages;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
