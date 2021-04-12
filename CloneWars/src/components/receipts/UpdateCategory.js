import React from 'react';
import ReactDOM from 'react-dom';
// import Header from './header/header';
// import Footer from './footer/footer';
// import Menu from './menu/menu';
// import Family from './family/family';
// import Planner from './planner/planner';
// import Receipts from './receipts/receipts';
// import Storages from './storages/storages';
// import Ingredients from './ingredients/ingredients';
// import Exports from './exports/exports';
import CategoryList from './CategoryList'
// let PropertiesJson = require("./json/properties.json");

function UpdateCategory(target) {
    console.log(target)
    // if (target && typeof target === 'string') PropertiesJson.mode = target;
    //     else {PropertiesJson = target}
    // localStorage.setItem('hgp-properties', JSON.stringify(PropertiesJson))
    
    ReactDOM.render(
    <React.StrictMode>
    <CategoryList />
    </React.StrictMode>,
    document.getElementById('root')
);
}

export default UpdateCategory;
