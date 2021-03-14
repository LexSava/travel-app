import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CountryType from "./../../types/CountryModel";
import Overview from "./Overview/Overview";
import "./Country.scss";

type CountryProps = {
  countryInfo: CountryType;
  conveyLanguage: string;
};

const Country = ({ countryInfo, conveyLanguage }: CountryProps) => {
  return (
    <div>
      <Overview countryInfo={countryInfo} conveyLanguage={conveyLanguage}/>
    </div>
  );
};

export default Country;
