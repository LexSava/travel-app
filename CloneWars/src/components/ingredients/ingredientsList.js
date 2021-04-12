import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListIngredients from './ListIngredients';
import withListLoading from '../WithListLoading';
const PropertiesJson = require("../json/properties.json");
// const DictJson = require("../json/dict.json");

// const handleClick = () => { UpdateAll("mode_receipts") };

function IngredientsList() {
  // const language = PropertiesJson.language;
  // const categoriesListTitle = DictJson[language].categories;

  const ListIngredientsLoading = withListLoading(ListIngredients);
  const [appState, setAppState] = useState({
    loading: false,
    menu: null,
  });

useEffect(() => {
    setAppState({ loading: true });
    const menuArr = JSON.parse(localStorage.getItem("hgp-menu"));
    if(!menuArr) return(<div></div>);
    const regEx = menuArr.join("|");
    const serverUrl = PropertiesJson.serverUrl;
    const requestUrl = serverUrl + '/rec/array';
    const apiUrl = requestUrl;
    const config = { el: "idMeal", reg: regEx};
    axios.post(apiUrl, config).then((menus) => {
    const Allmenus = menus.data;
      setAppState({ loading: false, menu: Allmenus });
    });
  }, [setAppState]);
  return (
    <div className='content'>
      <div className="ingredients-wrapper">
        <ListIngredientsLoading menu={appState.menu} />
      </div>
    </div>
  );
}
export default IngredientsList;