import React from "react";
// import CategoryList from './CategoryList';
// import ReactDOM from 'react-dom';
// import Receipts from './receipts';
import UpdateCategory from './UpdateCategory'
let PropertiesJson = require("../json/properties.json");

const categorySt = PropertiesJson.category;
console.log("categorProp", categorySt)

const ChangeCategory = (e) => {
  const target = e.target.className.slice(0, -14);
  let propertiesChanged = false;
  let localProp = JSON.parse(localStorage.getItem('hgp-properties'));
  console.log (e.target.className.slice(0, -14))
  if (target !== categorySt) {
    PropertiesJson.category = target;
    console.log(PropertiesJson);
    propertiesChanged = true;
    localProp.category = target;
    localStorage.setItem('hgp-properties', JSON.stringify(localProp))
  }
  if (propertiesChanged)  {
    UpdateCategory()
  }
}

const ListCategories = (props) => {

  const { categories } = props;
  if (!categories || categories.length === 0) return <p>No data, sorry</p>;

  return (
    <div className='categories-list'>
      {categories.map((cat, i) => {
        const category0 = cat[0]; 
        const activeClassName = category0 + " category-name active-category"
        const categoryClassName = category0 + " category-name"
        const catClassName = category0 === categorySt ?  activeClassName : categoryClassName;
        return (
          <div key={i} className='list-item'>
            <div onClick={ChangeCategory} className={catClassName}>{category0}</div>
            {/* <div className='category-qty'>{cat[1]}</div> */}
          </div>
        );
      })}
    </div>
  );
};
export default ListCategories;