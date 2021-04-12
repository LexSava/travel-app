import React from 'react';
import { useSelector } from 'react-redux';
import './WidgetTime.scss';

function WidgetTime({ timeZoneName }) {
  const { dict, locale } = useSelector(state => state);
  const [currentDate, setCurrentDate] = React.useState(getCurrentDate());

  React.useEffect(() => {
    setCurrentDate(getCurrentDate());

    const update = setInterval(() => {
      setCurrentDate(getCurrentDate());
    }, 1000);

    return () => clearInterval(update);
  }, [locale]);

  function getCurrentDate() {
    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timeZoneName,
    };
    const date = new Date();
    return date.toLocaleString(locale.substr(0, 2), dateOptions);
  }

  return (
    <div className="widget widgets__current-time">
      <h3 className="current-time__title">{dict.DATE_TIME}</h3>
      <p className="current-time__value">{currentDate}</p>
    </div>
  );
}

export default WidgetTime;
