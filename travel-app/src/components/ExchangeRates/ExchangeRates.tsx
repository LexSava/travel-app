import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import "./ExchangeRates.scss";

interface HeaderExchangeRates {
  conveyLanguage: string;
  countryInfo: any;
}

const ExchangeRates: React.FC<HeaderExchangeRates> = (props) => {
  const [loading, setLoading] = useState(false);
  const [course, setСourse] = useState<any>({});
  const [courseUSD, setСourseUSD] = useState<string>(
    "USD" + props.countryInfo.currencies[0].code
  );
  const [widgetHeader, setWidgetHeader] = useState<string>("");
  const [currencyTitle, setCurrencyTitle] = useState<string>("");
  const [exchangeRate, setExchangeRate] = useState<string>("");

  useEffect(() => {
    if (props.conveyLanguage === "en") {
      setCurrencyTitle("Сurrency - Belarusian ruble");
      setExchangeRate("Exchange rate to USD");
      return setWidgetHeader("Exchange rates");
    } else if (props.conveyLanguage === "ru") {
      setCurrencyTitle("Валюта - Белорусский рубль");
      setExchangeRate("Курс обмена к доллару США");
      return setWidgetHeader("Обменные курсы");
    } else {
      setCurrencyTitle("Валюта - Беларускі рубель");
      setExchangeRate("Курс абмену да даляра CША");
      return setWidgetHeader("Курсы валют");
    }
  }, [props.conveyLanguage]);

  useEffect(() => {
    setTimeout(() => {
      async function getWeather() {
        const url = `http://api.currencylayer.com/live?access_key=374a7a1666c6f48dc91d86a63e62a2ff`;
        const res = await fetch(url);
        const data = await res.json();
        setСourse(data);
        setLoading(true);
      }
      getWeather();
    }, 1000);
  }, [props.conveyLanguage]);
  const getCourseUSD = () => {
    for (let key in course.quotes) {
      if (key === courseUSD) {
        return course.quotes[key];
      }
    }
  };

  if (!loading) {
    return <div>loading...</div>;
  }
  return (
    <Container className="p-1 date-widget-block mb-2">
      <Card className="date-widget-card">
        <Card.Header className="text-primary font-weight-normal">
          {widgetHeader}
        </Card.Header>
        <Card.Body>
          <Card.Title>{currencyTitle}</Card.Title>
          <Card.Text className="exchangeRate-text">{exchangeRate}</Card.Text>
          <Card.Text>
            {getCourseUSD()} - {props.countryInfo.currencies[0].code}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ExchangeRates;
