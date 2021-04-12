import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import Header from './components/header/header';
// import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import Family from './components/family/Family';
import Planner from './components/planner/Planner';
import Receipts from './components/receipts/Receipts';
import Storages from './components/storages/Storages';
import Ingredients from './components/ingredients/Ingredients';
import Export from './components/export/Export';
// import reportWebVitals from './reportWebVitals';
const PropertiesJson = require("./components/json/properties.json");

const localProp = JSON.parse(localStorage.getItem("hgp-properties"));
if (localProp) {
  PropertiesJson.language = localProp.language;
  PropertiesJson.theme = localProp.theme;
  PropertiesJson.mode = localProp.mode;
  }

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Family />
    <Storages />
    <Planner />
    <Receipts />
    <Ingredients />
    <Export />
    {/* <Footer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
