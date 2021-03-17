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
  console.log(course);
  if (!loading) {
    return <div>loading...</div>;
  }
  return (
    <Container className="p-1 date-widget-block mb-2">
      <Card className="date-widget-card">
        <Card.Header className="text-primary font-weight-normal">
          Exchange rates
        </Card.Header>
        <Card.Body>
          <Card.Title>{course.quotes.USDAED}</Card.Title>
          <Card.Text>{course.timestamp}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ExchangeRates;
