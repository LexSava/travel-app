import "bootstrap/dist/css/bootstrap.min.css";
import "./DateWidget.scss";
import Moment from "react-moment";
import moment from "moment";
import "moment-timezone";
import "moment/locale/ru";
import "moment/locale/be";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

interface HeaderDateWidget {
  conveyLanguage: string;
  countryInfo: any;
}

const DateWidget: React.FC<HeaderDateWidget> = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function setDateTimezone() {
      return moment.locale(props.conveyLanguage);
    }
    setDateTimezone();
  }, [props.conveyLanguage]);

  useEffect(() => {
    setTimeout(() => {
      function setDateTimezone() {
        return moment.tz.setDefault(props.countryInfo.timeZone);
      }
      setDateTimezone();
      setLoading(true);
    }, 1000);
  }, []);
  if (!loading) {
    return <div>loading...</div>;
  }
  return (
    <Container className="p-1 date-widget-block">
      <Card className="date-widget-card">
        <Card.Header className="text-primary font-weight-normal">
          Time in the {props.countryInfo.capital}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <Moment format="DD" interval={1000} className="m-1" />
            <Moment format="MMMM" interval={1000} className="m-1" />
            <Moment format="dddd" interval={1000} className="m-1" />
          </Card.Title>
          <Card.Text>
            <Moment
              format="HH:mm:ss"
              interval={1000}
              className="font-weight-bold time"
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DateWidget;
