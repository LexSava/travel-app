import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListCategories from './ListCategories';
import withListLoading from './WithListLoading';
const PropertiesJson = require("../json/properties.json");
// const DictJson = require("../json/dict.json");

// const handleClick = () => { UpdateAll("mode_receipts") };

function CategoriesList() {
  //  const language = PropertiesJson.language;
  //  const areasListTitle = DictJson[language].areas;
  const serverUrl = PropertiesJson.serverUrl;
  const requestUrl = serverUrl + '/rec/area/';

  const ListCategoriesLoading = withListLoading(ListCategories);
  const [appState, setAppState] = useState({
    loading: false,
    areas: null,
  });

useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = requestUrl;
    axios.get(apiUrl).then((areas) => {
      const Allareas = areas.data;
      setAppState({ loading: false, areas: Allareas });
    });
  }, [setAppState]);
  return (
    <div className='areas'>
      {/* <header className="areas-header">{ areasListTitle }</header> */}      
      <div className="areas-wrapper">
        <ListCategoriesLoading isLoading={appState.loading} categories={appState.areas} />
      </div>
    </div>
  );
}
export default CategoriesList;