import React from 'react';
const PropertiesJson = require("./json/properties.json");
const DictJson = require("./json/dict.json");

function WithListLoading(Component) {
  const language = PropertiesJson.language;
  const loadingMessage = DictJson[language].loadingMessage;
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div>
      <div className="loading" alt="loading"></div>
      {loadingMessage}
      </div>
    );
  };
}
export default WithListLoading;