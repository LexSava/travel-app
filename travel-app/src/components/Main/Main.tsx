import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';
import './Main.scss';
import belarusHeadIMg from "../../assets/img/belarus.jpg";
import ukraineHeadIMg from "../../assets/img/ukraine.jpg";
import lithuaniaHeadIMg from "../../assets/img/lithuania.jpg";
import italyaHeadIMg from "../../assets/img/italya.jpg";
import portugalHeadIMg from "../../assets/img/portugal.jpg";
import spainHeadIMg from "../../assets/img/spain.jpg";
import netherlandsHeadIMg from "../../assets/img/netherlands.jpg";
import canadaHeadIMg from "../../assets/img/canada.jpg";

const Main = () => {
const countrys: Array<any> = [
  {
    id:1,
    country: "Belarus",
    capital: "Minsk",
    img: belarusHeadIMg,
  },
  {
    id:2,
    country: "Ukraine",
    capital: "Kiev",
    img: ukraineHeadIMg,
  },
  {
    id:3,
    country: "Lithuania",
    capital: "Vilnius",
    img: lithuaniaHeadIMg,
  },
  {
    id:4,
    country: "Italy",
    capital: "Rome",
    img: italyaHeadIMg,
  },
  {
    id:5,
    country: "Portugal",
    capital: "Lisbon",
    img: portugalHeadIMg,
  },
  {
    id:6,
    country: "Spain",
    capital: "Madrid",
    img: spainHeadIMg,
  },
  {
    id:7,
    country: "Netherlands",
    capital: "Amsterdam",
    img: netherlandsHeadIMg,
  },
  {
    id:8,
    country: "Canada",
    capital: "Ottawa",
    img: canadaHeadIMg,
  },
]
console.log(countrys);
      
const cards: any = countrys.map((item):any => {
  return <Card style={{ width: '18rem' }} key={item.id} className="card-country shadow-sm rounded">
      <Card.Img variant="top" src={item.img}/>
          <Card.Body>
      <Card.Title className="card-country-title">{item.country}</Card.Title>
      <Card.Text className="card-country-text">
      {item.capital}
      </Card.Text>
      <Button variant="primary">More details</Button>
      </Card.Body>
      </Card>
});
    return (
      <Container className="main d-flex justify-content-between flex-wrap ">
        {cards}
      </Container>
    );
};

export default Main;
