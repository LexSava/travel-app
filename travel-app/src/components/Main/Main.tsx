import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Main.scss";

interface MainProps {
  countrysCard: any;
}

const Main: React.FC<MainProps> = (props) => {
  const cards: any = props.countrysCard.map((item: any) => {
    return (
      <Link to={`/${item.country}`} key={item.id}>
        <Card
          style={{ width: "18rem" }}
          key={item.id}
          className="card-country shadow-sm rounded"
        >
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title className="card-country-title">
              {item.country}
            </Card.Title>
            <Card.Text className="card-country-text">{item.capital}</Card.Text>
            <Button variant="primary">More details</Button>
          </Card.Body>
        </Card>
      </Link>
    );
  });
  return (
    <Container className="main d-flex justify-content-between flex-wrap ">
      {cards}
    </Container>
  );
};

export default Main;
