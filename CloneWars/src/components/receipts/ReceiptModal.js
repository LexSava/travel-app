import React from "react";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

function Modal(props) {
  const language = PropertiesJson.language;
  // const receiptOverviewTitle = DictJson[language].receiptOverview;
  const { show, closeModal } = props;
  const receipt = JSON.parse(localStorage.getItem("modalSee"));
  const source = DictJson[language].source;
  const sourceTitle = DictJson[language].sourceTitle;

  if(!receipt) return (<div></div>);

  let strDescriptionBlock = (<div className="receipt-description"></div>);
  let strDrinkAlternateBlock = (<div className="receipt-drink-alternate"></div>);
  let strSubCategoryBlock = (<div className="receipt-cat"></div>);
  let strAreaBlock = (<div className="receipt-cat"></div>)
  let strTagsBlock = (<div className="receipt-tags"></div>);
  let strYoutubeBlock = (<div className="receipt-youtube"></div>);
  let receiptIngredient1Block = (<div className="receipt-ingredient 1"></div>);
  let receiptIngredient2Block = (<div className="receipt-ingredient 2"></div>);
  let receiptIngredient3Block = (<div className="receipt-ingredient 3"></div>);
  let receiptIngredient4Block = (<div className="receipt-ingredient 4"></div>);
  let receiptIngredient5Block = (<div className="receipt-ingredient 5"></div>);
  let receiptIngredient6Block = (<div className="receipt-ingredient 6"></div>);
  let receiptIngredient7Block = (<div className="receipt-ingredient 7"></div>);
  let receiptIngredient8Block = (<div className="receipt-ingredient 8"></div>);
  let receiptIngredient9Block = (<div className="receipt-ingredient 9"></div>);
  let receiptIngredient10Block = (<div className="receipt-ingredient 10"></div>);
  let receiptIngredient11Block = (<div className="receipt-ingredient 11"></div>);
  let receiptIngredient12Block = (<div className="receipt-ingredient 12"></div>);
  let receiptIngredient13Block = (<div className="receipt-ingredient 13"></div>);
  let receiptIngredient14Block = (<div className="receipt-ingredient 14"></div>);
  let receiptIngredient15Block = (<div className="receipt-ingredient 15"></div>);
  let receiptIngredient16Block = (<div className="receipt-ingredient 16"></div>);
  let receiptIngredient17Block = (<div className="receipt-ingredient 17"></div>);
  let receiptIngredient18Block = (<div className="receipt-ingredient 18"></div>);
  let receiptIngredient19Block = (<div className="receipt-ingredient 19"></div>);
  let receiptIngredient20Block = (<div className="receipt-ingredient 20"></div>);

  if (receipt) { 
  if (receipt.strDescription) strDescriptionBlock = (<div className="receipt-description">{receipt.strDescription}</div>);
  if (receipt.strDrinkAlternate) strDrinkAlternateBlock = (<div className="receipt-drink-alternate">{receipt.strDrinkAlternate}</div>);
  if (receipt.strSubCategory) strSubCategoryBlock = (<div className="receipt-cat">{receipt.strSubCategory}</div>);
  if (receipt.strArea) strAreaBlock = (<div className="receipt-cat">{receipt.strArea}</div>);
  if (receipt.strTags) strTagsBlock = (<div className="receipt-tags">{receipt.strTags}</div>);
  if (receipt.strYoutube) strYoutubeBlock = (<div className="receipt-youtube">{receipt.strYoutube}</div>);

  if (receipt.strIngredient1) receiptIngredient1Block = (
          <div className="receipt-ingredient 1">
            <div className="receipt-ingredient-name">{receipt.strIngredient1}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure1}</div>
          </div>);
  if (receipt.strIngredient2) receiptIngredient2Block = (
          <div className="receipt-ingredient 2">
            <div className="receipt-ingredient-name">{receipt.strIngredient2}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure2}</div>
          </div>);
  if (receipt.strIngredient3) receiptIngredient3Block = (
          <div className="receipt-ingredient 3">
            <div className="receipt-ingredient-name">{receipt.strIngredient3}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure3}</div>
          </div>);
  if (receipt.strIngredient4) receiptIngredient4Block = (
          <div className="receipt-ingredient 4">
            <div className="receipt-ingredient-name">{receipt.strIngredient4}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure4}</div>
          </div>);
  if (receipt.strIngredient5) receiptIngredient5Block = (
          <div className="receipt-ingredient 5">
            <div className="receipt-ingredient-name">{receipt.strIngredient5}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure5}</div>
          </div>);
  if (receipt.strIngredient6) receiptIngredient6Block = (
          <div className="receipt-ingredient 18">
            <div className="receipt-ingredient-name">{receipt.strIngredient6}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure6}</div>
          </div>);
  if (receipt.strIngredient7) receiptIngredient7Block = (
          <div className="receipt-ingredient 18">
            <div className="receipt-ingredient-name">{receipt.strIngredient7}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure7}</div>
          </div>);
  if (receipt.strIngredient8) receiptIngredient8Block = (
          <div className="receipt-ingredient 8">
            <div className="receipt-ingredient-name">{receipt.strIngredient8}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure8}</div>
          </div>);
  if (receipt.strIngredient9) receiptIngredient9Block = (
          <div className="receipt-ingredient 18">
            <div className="receipt-ingredient-name">{receipt.strIngredient9}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure9}</div>
          </div>);
  if (receipt.strIngredient10) receiptIngredient10Block = (
          <div className="receipt-ingredient 10">
            <div className="receipt-ingredient-name">{receipt.strIngredient10}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure10}</div>
          </div>);
  if (receipt.strIngredient11) receiptIngredient11Block = (
          <div className="receipt-ingredient 11">
            <div className="receipt-ingredient-name">{receipt.strIngredient11}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure11}</div>
          </div>);
  if (receipt.strIngredient12) receiptIngredient12Block = (
          <div className="receipt-ingredient 12">
            <div className="receipt-ingredient-name">{receipt.strIngredient12}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure12}</div>
          </div>);
  if (receipt.strIngredient13) receiptIngredient13Block = (
          <div className="receipt-ingredient 13">
            <div className="receipt-ingredient-name">{receipt.strIngredient13}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure13}</div>
          </div>);
  if (receipt.strIngredient14) receiptIngredient14Block = (
          <div className="receipt-ingredient 14">
            <div className="receipt-ingredient-name">{receipt.strIngredient14}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure14}</div>
          </div>);
  if (receipt.strIngredient15) receiptIngredient15Block = (
          <div className="receipt-ingredient 15">
            <div className="receipt-ingredient-name">{receipt.strIngredient15}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure15}</div>
          </div>);
  if (receipt.strIngredient16) receiptIngredient16Block = (
          <div className="receipt-ingredient 16">
            <div className="receipt-ingredient-name">{receipt.strIngredient16}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure16}</div>
          </div>);
  if (receipt.strIngredient17) receiptIngredient17Block = (
          <div className="receipt-ingredient 17">
            <div className="receipt-ingredient-name">{receipt.strIngredient17}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure17}</div>
          </div>);
  if (receipt.strIngredient18) receiptIngredient18Block = (
          <div className="receipt-ingredient 18">
            <div className="receipt-ingredient-name">{receipt.strIngredient18}</div>
            <div className="receipt-ingredient-dotted"></div>
            <div className="receipt-ingredient-measure">{receipt.strMeasure18}</div>
          </div>);
  if (receipt.strIngredient19) receiptIngredient19Block = (
          <div className="receipt-ingredient 19">
           <div className="receipt-ingredient-name">{receipt.strIngredient19}</div>
           <div className="receipt-ingredient-dotted"></div>
           <div className="receipt-ingredient-measure">{receipt.strMeasure19}</div>
          </div>);
  if (receipt.strIngredient20) receiptIngredient20Block = (<div className="receipt-ingredient 20">
           <div className="receipt-ingredient-name">{receipt.strIngredient20}</div>
           <div className="receipt-ingredient-dotted"></div>
           <div className="receipt-ingredient-measure">{receipt.strMeasure20}</div>
         </div>);
  }

  return (
    <>
    <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <div className="modal-receipt">
        <div className="receipt-meal"><h1>{receipt.strMeal}</h1></div>
            {strTagsBlock}
          <div className="receipt-category">
             <div className="receipt-cat">{receipt.strRequestsCounter}</div>
             <div className="receipt-cat">{receipt.strCategory}</div>
             {strSubCategoryBlock}
             {strAreaBlock}
             <div className="receipt-cat"><a target="_blank" rel="noreferrer" href={receipt.strSource} title={sourceTitle}>{source}</a></div>
             {strYoutubeBlock}
          </div>
         {strDrinkAlternateBlock}
         <div className="receipt-thumb"><img src={receipt.strMealThumb} alt={receipt.strMeal} /></div>
         {strDescriptionBlock}
         <div className="receipt-ingredients">
         <div className="receipt-persons">
         <div className="receipt-persons-minus">-</div>
         <div className="receipt-persons-value">{receipt.strForPersons}</div>
         <div className="receipt-persons-plus">+</div>
         </div>
         {receiptIngredient1Block}
         {receiptIngredient2Block}
         {receiptIngredient3Block}
         {receiptIngredient4Block}
         {receiptIngredient5Block}
         {receiptIngredient6Block}
         {receiptIngredient7Block}
         {receiptIngredient8Block}
         {receiptIngredient9Block}
         {receiptIngredient10Block}
         {receiptIngredient11Block}
         {receiptIngredient12Block}
         {receiptIngredient13Block}
         {receiptIngredient14Block}
         {receiptIngredient15Block}
         {receiptIngredient16Block}
         {receiptIngredient17Block}
         {receiptIngredient18Block}
         {receiptIngredient19Block}
         {receiptIngredient20Block}
           <div className="receipt-instruction">{receipt.strInstructions}</div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Modal;