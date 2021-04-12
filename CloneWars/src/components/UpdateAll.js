import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
// import Footer from './footer/Footer';
import Menu from './menu/menu';
import Family from './family/Family';
import Planner from './planner/Planner';
import Receipts from './receipts/Receipts';
import Storages from './storages/Storages';
import Ingredients from './ingredients/Ingredients';
import Export from './export/Export';
let PropertiesJson = require("./json/properties.json");

function UpdateAll(target) {
    if (target && typeof target === 'string') PropertiesJson.mode = target;
        else {PropertiesJson = target}
    localStorage.setItem('hgp-properties', JSON.stringify(PropertiesJson))
    
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
}

export default UpdateAll;
