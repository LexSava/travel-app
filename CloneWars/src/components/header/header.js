import React from 'react';
// const PropertiesJson = require("../json/properties.json");
// const DictJson = require("../json/dict.json");

// const langsReg = DictJson.langsReg;

function header() {
  // const language = PropertiesJson.language;

  return (
    <div className="header">
      <div className="users-favorite material-icons">favorite_border</div>
      <div className="auth-switcher">
        <span className="auth material-icons">account_circle</span>
        </div>
    </div>
  );
}

export default header;
