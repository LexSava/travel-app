import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.scss";
import React, { Component, useState, useEffect, Suspense } from "react";
import { Card, Container } from "react-bootstrap";

interface HeaderWeather {
  countryInfo: any;
  conveyLanguage: string;
}

const Weather: React.FC<HeaderWeather> = (props) => {
  const [capital, setCapital] = useState<any>(props.countryInfo.capital);
  const [capitalWeather, setCapitalWeather] = useState<any>({});

  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=en&appid=0a2cb56e8186230e9a0482059bb71b4d&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    setCapitalWeather(data);
  }
  // getWeather();
  // let temperature: number = 0;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      async function getWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=${props.conveyLanguage}&appid=0a2cb56e8186230e9a0482059bb71b4d&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        setCapitalWeather(data);
        setLoading(true);
      }
      getWeather();
    }, 100);
  }, []);

  // fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=en&appid=0a2cb56e8186230e9a0482059bb71b4d&units=metric`
  // )
  //   .then((results) => results.json())
  //   .then((data) => {
  //     setCapitalWeather(data);
  //     setLoading(true);
  //   });

  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=en&appid=0a2cb56e8186230e9a0482059bb71b4d&units=metric`
  //   )
  //     .then((results) => results.json())
  //     .then((data) => {
  //       setCapitalWeather(data);
  //     });
  // }, []);

  // console.log(capitalWeather.main.temp);
  if (!loading) {
    return <div>loading...</div>;
  }
  return (
    <Suspense fallback={<h2>Loading posts...</h2>}>
      <Container className="p-1 date-weather-block">
        <Card className="date-widget-card">
          <Card.Header className="text-primary font-weight-normal">
            Weather {capital}
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>{capitalWeather.main.temp.toFixed(0)}°C</Card.Text>
            <Card.Text>{capitalWeather.weather[0].description}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Suspense>
  );
};
export default Weather;
