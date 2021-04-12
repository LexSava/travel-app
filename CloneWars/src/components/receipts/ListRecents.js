import Modal from './ReceiptModal.js';
import React, { useState } from "react";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const ListRecents = (props) => {
  const language = PropertiesJson.language;
  const noDataMessage = DictJson[language].noDataMessage;

  const [show, setShow] = useState(false);
  const { recents } = props;
  if (!recents || recents.length === 0) return <p>{noDataMessage}</p>;

  const openModal = (e) => {
    const target = e.target.classList[0]
    localStorage.setItem("modalSee", JSON.stringify(recents[target]))
    setShow(true);
  }

  const closeModal = () => setShow(false);
  
  const addFavorite = (e) => {
    const target = e.target.classList[0];
    const favLocal = JSON.parse(localStorage.getItem("hgp-favorite"));
    let favNew = favLocal ? favLocal: [];
    favNew.push(target);
    localStorage.setItem("hgp-favorite", JSON.stringify(favNew))
  }

  const addMenu = (e) => {
    const target = e.target.classList[0]
    console.log(e)
    let menuLocal = JSON.parse(localStorage.getItem("hgp-menu"));
    let menuNew = menuLocal ? menuLocal: [];
    menuNew.push(target);
    localStorage.setItem("hgp-menu", JSON.stringify(menuNew))
  } 

  return (
    <div className='recent-content'>
      {recents.map((recent, i) => {
        const clasNm =  i + " receipt";
        const clasNM =  i + " receipt-meal";
        const clasNS =  i + " receipt-see";
        const clasFvr =  recent.idMeal + " receipt-favorite material-icons";
        const clasAdd =  recent.idMeal + " receipt-add material-icons";
        const divStyle = {
           backgroundImage: 'url(' + recent.strMealThumb + ')',
              };
        return (
          <div style={divStyle} key={recent.idMeal} className={ clasNm } >
            <div className="receipt-buttons">
            <div onClick={addMenu} className={clasAdd}>add_circle</div>
            <div onClick={addFavorite} className={clasFvr}>favorite_border</div>
            </div>
            <div onClick={openModal} className={clasNS}></div>
            <div className={clasNM}>{recent.strMeal}</div>
          </div>
        );
      })}
      <Modal closeModal={closeModal} show={show}/>
    </div>
  );
};
export default ListRecents;


