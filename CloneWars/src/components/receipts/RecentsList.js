import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListRecents from './ListRecents';
import withListLoading from '../WithListLoading';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

// const handleClick = () => { UpdateAll("mode_receipts") };

function RecentsReceipts() {
    const language = PropertiesJson.language;
    const recentsListTitle = DictJson[language].recent;

    const ListRecentsLoading = withListLoading(ListRecents);
    const [appState, setAppState] = useState({
    loading: false,
    recents: null,
  });

useEffect(() => {
    setAppState({ loading: true });
    const recentsArr = PropertiesJson.recents;
    const regEx = recentsArr.join("|");
    const serverUrl = PropertiesJson.serverUrl;
    const requestUrl = serverUrl + '/rec/array';
    const apiUrl = requestUrl;
    const config = { el: "idMeal", reg: regEx};
    axios.post(apiUrl, config).then((recents) => {
    const Allrecents = recents.data;

    setAppState({ loading: false, recents: Allrecents });
    });
  }, [setAppState]);
  
  return (
    <div className='recents'>
      <div className="recents-header">{ recentsListTitle }</div>
        <ListRecentsLoading isLoading={appState.loading} recents={appState.recents} />
    </div>
  );
}
export default RecentsReceipts;