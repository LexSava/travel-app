import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

interface HeaderMain {
  countrysCard: any;
  conveyLanguage: string;
}

const Main: React.FC<HeaderMain> = (props) => {
  const [cards, setCards] = useState<any>([]);

  useEffect(() => {
    setCards(
      props.countrysCard.map((item: any) => {
        if (props.conveyLanguage === "en") {
          return (
            <Link
              to={`/${item.nameEn}`}
              key={item._id}
              className="link-card-country"
            >
              <Card
                style={{ width: "18rem" }}
                key={item._id}
                className="card-country shadow-sm rounded"
              >
                <Card.Img variant="top" src={item.photoSrc1} />
                <Card.Body>
                  <Card.Title className="card-country-title">
                    {item.nameEn}
                  </Card.Title>
                  <Card.Text className="card-country-text">
                    {item.capitalEn}
                  </Card.Text>
                  <Button variant="primary">More details</Button>
                </Card.Body>
              </Card>
            </Link>
          );
        } else if (props.conveyLanguage === "ru") {
          return (
            <Link
              to={`/${item.nameEn}`}
              key={item._id}
              className="link-card-country"
            >
              <Card
                style={{ width: "18rem" }}
                key={item._id}
                className="card-country shadow-sm rounded"
              >
                <Card.Img variant="top" src={item.photoSrc1} />
                <Card.Body>
                  <Card.Title className="card-country-title">
                    {item.nameRu}
                  </Card.Title>
                  <Card.Text className="card-country-text">
                    {item.capitalRu}
                  </Card.Text>
                  <Button variant="primary">Подробнее</Button>
                </Card.Body>
              </Card>
            </Link>
          );
        } else {
          return (
            <Link
              to={`/${item.nameEn}`}
              key={item._id}
              className="link-card-country"
            >
              <Card
                style={{ width: "18rem" }}
                key={item._id}
                className="card-country shadow-sm rounded"
              >
                <Card.Img variant="top" src={item.photoSrc1} />
                <Card.Body>
                  <Card.Title className="card-country-title">
                    {item.nameBe}
                  </Card.Title>
                  <Card.Text className="card-country-text">
                    {item.capitalBe}
                  </Card.Text>
                  <Button variant="primary">Больш падрабязна</Button>
                </Card.Body>
              </Card>
            </Link>
          );
        }
      })
    );
  }, [props]);
  return (
    <Container className="main d-flex justify-content-between flex-wrap ">
      {cards}
    </Container>
  );
};

export default Main;
