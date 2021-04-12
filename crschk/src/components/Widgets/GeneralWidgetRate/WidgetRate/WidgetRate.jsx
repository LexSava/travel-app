import React from 'react';
import './WidgetRate.scss';

function RateWidget({ currency, toConvert }) {
  const [rate, setRate] = React.useState('');

  React.useEffect(() => {
    fetch(
      `https://free.currconv.com/api/v7/convert?q=${toConvert}_${currency}&compact=ultra&apiKey=d1639f3bc06eda64e4bf`,
    )
      .then((res) => res.json())
      .then((data) => setRate(data[`${toConvert}_${currency}`]));
  }, []);

  return (
    <p className="rate__content">
      {`${toConvert}-${currency}`}: {rate}
    </p>
  );
}

export default RateWidget;
