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
  let courseEur = 0;
  let courseByn = 0;
  let courseCurrent = 0;
  
  useEffect(() => {
    if (props.conveyLanguage === "en") {
      setCurrencyTitle("Сurrency - ");
      setExchangeRate("Exchange rate to USD");
      return setWidgetHeader("Exchange rates");
    } else if (props.conveyLanguage === "ru") {
      setCurrencyTitle("Валюта - ");
      setExchangeRate("Курс обмена к доллару США");
      return setWidgetHeader("Обменные курсы");
    } else {
      setCurrencyTitle("Валюта - ");
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
        console.log(data)
        setСourse(data);
        setLoading(true);
      }
      getWeather();
    }, 1000);
  }, [props.conveyLanguage]);
  const getCourseUSD = () => {
    for (let key in course.quotes) {
      if (key === courseUSD) courseCurrent = course.quotes[key];
      if (key === "USDEUR") courseEur = course.quotes[key];
      if (key === "USDBYN") courseByn = course.quotes[key];
    }
        return courseCurrent;
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
          <Card.Text>
            1 USD - {getCourseUSD().toFixed(2)} {props.countryInfo.currencies[0].code}<br />
            1 EUR - {(courseCurrent/courseEur).toFixed(2)} {props.countryInfo.currencies[0].code}<br /> 
            1 BYN - {(courseCurrent/courseByn).toFixed(2)} {props.countryInfo.currencies[0].code}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ExchangeRates;
