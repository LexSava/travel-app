import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import CountryType from "./../../types/CountryModel";
import Overview from "./Overview/Overview";

import "./Country.scss";

type CountryProps = {
  countryInfo: CountryType;
};

const Country = ({ countryInfo }: CountryProps) => {
  return (
    <div>
      <Overview countryInfo={countryInfo} />
    </div>
  );
};

export default Country;
