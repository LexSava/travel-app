import React from 'react';
import { useSelector } from 'react-redux';
import Widgets from '../Widgets/Widgets';

import './CountryPromo.scss';

function CountryPromo({ countryState }) {
  const { dict } = useSelector(state => state);
  const { name, description, image, capital } = countryState;

  return  (
    <div className="country-promo__wrapper" style={{backgroundImage: `url(${image}`}}>
      <div className="container">
        <div className="country-promo__card">
          <h2 className="card__title">{name}</h2>
          <h3>{dict.CAPITAL}: {capital.name}</h3>
          <p className="card__subtitle">
            {description}
          </p>
        </div>
        <Widgets countryState={countryState}/>
      </div>
    </div>
  );
}

export default CountryPromo;
