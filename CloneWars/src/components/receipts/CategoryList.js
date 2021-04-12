import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListCategory from './ListCategory';
import withListLoading from '../WithListLoading';
const PropertiesJson = require("../json/properties.json");
const categoryStr = PropertiesJson.category;

// const DictJson = require("../json/dict.json");

// const handleClick = () => { UpdateAll("mode_receipts") };

function CategoryList() {
    // const langfcuage = PropertiesJson.language;
    const ListCategoryLoading = withListLoading(ListCategory);
    const [appState, setAppState] = useState({
    loading: true,
    category: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const categoryStr = PropertiesJson.category;
    const serverUrl = PropertiesJson.serverUrl;
    const requestUrl = serverUrl + '/rec/array';
    const apiUrl = requestUrl;
    const config = { el: "strCategory", reg: categoryStr };
    console.log('CategoryConfig', config)
    axios.post(apiUrl, config).then((category) => {
    
    const Allcategory = category.data;

    setAppState({ loading: false, category: Allcategory });
    });
  }, [setAppState]);
  return (
    <div id='category' className='category'>
      <div className="category-header">{ categoryStr }</div>
        <ListCategoryLoading isLoading={appState.loading} category={appState.category} />
    </div>
  );
}
export default CategoryList;