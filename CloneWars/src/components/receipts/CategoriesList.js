import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListCategories from './ListCategories';
import withListLoading from '../WithListLoading';
const PropertiesJson = require("../json/properties.json");
// const DictJson = require("../json/dict.json");

// const handleClick = () => { UpdateAll("mode_receipts") };

function CategoriesList() {
  // const language = PropertiesJson.language;
  // const categoriesListTitle = DictJson[language].categories;

  const ListCategoriesLoading = withListLoading(ListCategories);
  const [appState, setAppState] = useState({
    loading: false,
    categories: null,
  });

useEffect(() => {
    setAppState({ loading: true });
  const serverUrl = PropertiesJson.serverUrl;
  const requestUrl = serverUrl + '/rec/cat/';
    const apiUrl = requestUrl;
    axios.get(apiUrl).then((categories) => {
      const Allcategories = categories.data;
      setAppState({ loading: false, categories: Allcategories });
    });
  }, [setAppState]);
  return (
    <div className='categories'>
      {/* <div className="categories-header">{ categoriesListTitle }</div> */}
      <div className="categories-wrapper">
        <ListCategoriesLoading categories={appState.categories} />
      </div>
    </div>
  );
}
export default CategoriesList;