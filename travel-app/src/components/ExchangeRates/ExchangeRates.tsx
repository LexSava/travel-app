import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import './ExchangeRates.scss';

interface HeaderExchangeRates{
  conveyLanguage: string;
  countryInfo: any;
}

const ExchangeRates: React.FC<HeaderExchangeRates> = (props) => {

  
  return (
    <Container className="p-1 date-widget-block mb-2">
    <Card className="date-widget-card">
      <Card.Header className="text-primary font-weight-normal">
        Time in the {props.countryInfo.capital}
      </Card.Header>
      <Card.Body>
        <Card.Title>
        
        </Card.Title>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
  );
};

export default ExchangeRates;
