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

const Export = () => {

    return (  
    <div className = "export">
      <ModeHeader mode={ 'export' }/>            
      {/* <FamilyModes /> */}
    </div>
    )
}



export default Export;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
