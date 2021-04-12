import Modal from './ReceiptModal.js';
import React, { useState } from "react";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const ListCategory = (props) => {
  const language = PropertiesJson.language;
  const noDataMessage = DictJson[language].noDataMessage;

  const [show, setShow] = useState(false);
  const { category } = props;
  if (!category || category.length === 0) return <p>{noDataMessage}</p>;

  const openModal = (e) => {
    const target = e.target.classList[0]
    console.log(e)
    localStorage.setItem("modalSee", JSON.stringify(category[target]))
    setShow(true);
  }

  const closeModal = () => setShow(false);

  const addFavorite = (e) => {
    const target = e.target.classList[0];
    let favLocal = JSON.parse(localStorage.getItem("hgp-favorite"));
    let favNew = favLocal ? favLocal = Array.from(favLocal): [];
    favNew.push(target);
    const favSet = new Set(favNew);
    favNew = Array.from(favSet);
    localStorage.setItem("hgp-favorite", JSON.stringify(favNew))
    PropertiesJson.favorites = favNew;
  }

  const addMenu = (e) => {
    const target = e.target.classList[0];
    console.log(e.target.classList)
    let menuLocal = JSON.parse(localStorage.getItem("hgp-menu"));
    let menuNew = menuLocal ? menuLocal = Array.from(menuLocal): [];
    menuNew.push(target);
    localStorage.setItem("hgp-menu", JSON.stringify(menuNew))
  }   

  return (
    <div className='category-content'>
      {category.map((categor, i) => {
        const clasNm =  i + " receipt";
        const clasNM =  i + " receipt-meal";
        const clasNS =  i + " receipt-see";
        const clasFvr =  categor.idMeal + " receipt-favorite material-icons";
        const clasAdd =  categor.idMeal + " receipt-add material-icons";

        const divStyle = {
           backgroundImage: 'url(' + categor.strMealThumb + ')',
              };
        return (
          <div style={divStyle} key={categor.idMeal} className={ clasNm } >
            <div className="receipt-buttons">
            <div onClick={addMenu} className={clasAdd}>add_circle</div>
            <div onClick={addFavorite} className={clasFvr}>favorite_border</div>
            </div>
            <div onClick={openModal} className={clasNS}></div>
            <div className={clasNM}>{categor.strMeal}</div>
            </div>
        );
      })}
      <Modal closeModal={closeModal} show={show}/>
    </div>
  );
};
export default ListCategory;



