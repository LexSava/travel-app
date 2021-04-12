import React from 'react';
import WidgetTime from './WidgetTime/WidgetTime';
import Weather from './Weather/Weather';
import GeneralWidgetRate from './GeneralWidgetRate/GeneralWidgetRate';
import './Widgets.scss';

function Widgets({countryState}) {
  const {capital: {timeZoneName, coordinates, name}, currency} = countryState
  return (
    <div className="country-promo__widgets">
      <WidgetTime timeZoneName={timeZoneName} />
      <Weather coordinates={coordinates} city={name}/>
      <GeneralWidgetRate currency={currency}/>
    </div>
  );
}

export default Widgets;
