// import Modal from './ReceiptModal.js';
import React, { useState } from "react";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const ListIngredients = (props) => {
  const language = PropertiesJson.language;
  const noDataMessage = DictJson[language].noDataMessage;

  // const [show, setShow] = useState(false);
  const { menu } = props;
  if (!menu || menu.length === 0) return <p>{noDataMessage}</p>;

  // const openModal = (e) => {
  //   const target = e.target.classList[0]
  //   localStorage.setItem("modalSee", JSON.stringify(menu[target]))
  //   setShow(true);
  // }

  // const closeModal = () => setShow(false);
  
  // const addFavorite = (e) => {
  //   const target = e.target.classList[0];
  //   const favLocal = JSON.parse(localStorage.getItem("hgp-favorite"));
  //   let favNew = favLocal ? favLocal: [];
  //   favNew.push(target);
  //   localStorage.setItem("hgp-favorite", JSON.stringify(favNew))
  // }

  const addMenu = (e) => {
    const target = e.target.classList[0]
    console.log(e)
    let menuLocal = JSON.parse(localStorage.getItem("hgp-menu"));
    let menuNew = menuLocal ? menuLocal: [];
    menuNew.push(target);
    localStorage.setItem("hgp-menu", JSON.stringify(menuNew))
  } 

  return (
    <div className='ingredients-content'>
      {menu.map((receip, i) => {
        const clasNm =  i + " receipt";
        const clasNM =  i + " receipt-meal";
        const clasNC =  i + " receipt-category";
        const clasAdd =  receip.idMeal + " receipt-add material-icons";
        
        return (
          <div key={receip.idMeal} className={ clasNm } >
            <div className={clasNM}>{receip.strMeal}</div>
            <div className={clasNC}>{receip.strCategory}</div>
            <div className="receipt-buttons">
            <div onClick={addMenu} className={clasAdd}>add_circle</div>
            </div>
          </div>
        );
      })}
      {/* <Modal closeModal={closeModal} show={show}/> */}
    </div>
  );
};
export default ListIngredients;


