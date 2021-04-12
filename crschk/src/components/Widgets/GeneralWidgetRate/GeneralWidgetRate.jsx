import React from 'react';
import { useSelector } from 'react-redux';
import WidgetRate from './WidgetRate/WidgetRate';

function GeneralWidgetRate({ currency }) {
  const { dict } = useSelector(state => state);
  const currenciesToConvert = ['USD', 'EUR', 'BYN'];

  return (
    <div className="widget rate-widget">
      <h3 className="rate__title">{dict.CURRENCIES}</h3>
      {currency && currenciesToConvert.map((el, index) => <WidgetRate currency={currency} toConvert={el} key={index} />)}
    </div>
  );
}

export default GeneralWidgetRate;
