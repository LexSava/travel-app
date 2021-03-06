import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.scss";
import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";

interface HeaderWeather {
  countryInfo: any;
  conveyLanguage: string;
}

const Weather: React.FC<HeaderWeather> = (props) => {
  const [capital, setCapital] = useState<any>(props.countryInfo.capitalEn);
  const [capitalWeather, setCapitalWeather] = useState<any>({});
  const [iconUrl, setIconUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [widgetHeader, setWidgetHeader] = useState<string>("");
  const [windText, setWindText] = useState<string>("");

  useEffect(() => {
    if (props.conveyLanguage === "en") {
      setWindText("Wind speed");
      return setWidgetHeader(`Weather ${props.countryInfo.capitalEn}`);
    } else if (props.conveyLanguage === "ru") {
      setWindText("Скорость ветра");
      return setWidgetHeader(`Погода ${props.countryInfo.capitalRu}`);
    } else {
      setWindText("Хуткасць ветру");
      return setWidgetHeader(`Надвор'е ${props.countryInfo.capitalBe}`);
    }
  }, [props.conveyLanguage]);

  useEffect(() => {
    setTimeout(() => {
      async function getWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=${props.conveyLanguage}&appid=0a2cb56e8186230e9a0482059bb71b4d&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        setCapitalWeather(data);
        setIconUrl(
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        );
        setLoading(true);
      }
      getWeather();
    }, 1000);
  }, [props.conveyLanguage]);

  if (!loading) {
    return <div>loading...</div>;
  }
  return (
    <Container className="p-1 date-weather-block mb-2">
      <Card className="date-widget-card">
        <Card.Header className="text-primary font-weight-normal fw-bold">
          {widgetHeader}
        </Card.Header>
        <Card.Body>
          <Card.Text className="font-weight-bold time m-1">
            {capitalWeather.main.temp.toFixed(0)}°C
            <img
              src={iconUrl}
              alt={capitalWeather.description}
              className="ml-4"
            />
          </Card.Text>
          <Card.Text className="fw-normal">
            {capitalWeather.weather[0].description}
          </Card.Text>
          <Card.Text className="d-flex">
            {windText}
            <Card.Text className="ml-3 fw-normal">
              {capitalWeather.wind.speed}
            </Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Weather;
