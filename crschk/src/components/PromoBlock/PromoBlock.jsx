import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountryOfTheDay } from "../../utils/api";
import "./PromoBlock.scss";

export default function PromoBlock() {
  const [country, setCountry] = useState(null);
  const { dict, locale } = useSelector(state => state);

  useEffect(() => {
    getCountryOfTheDay(locale)
      .then((country) => {
        const image = new Image();
        image.src = country.promo;
        setCountry(country);
      });
  }, [locale]);

  return (
    <>
      <Link className="promo-link" to={`/${country && country.ISOCode}`}>
        <div className="promo" style={{backgroundImage: `url(${country && country.promo})`}}>
          <div className="container">
            <h2 className="title">
                {dict.COUNTRY_OF_THE_DAY}
                {country && country.name}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
}
