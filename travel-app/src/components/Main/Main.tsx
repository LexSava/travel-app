import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';
import './Main.scss';
import belarusHeadIMg from "../../assets/img/Belarus.jpg";

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
    country: "Belarus",
    capital: "Minsk",
    img: belarusHeadIMg,
  },
  {
    id:3,
    country: "Belarus",
    capital: "Minsk",
    img: belarusHeadIMg,
  },
  {
    id:4,
    country: "Belarus",
    capital: "Minsk",
    img: belarusHeadIMg,
  },
  {
    id:5,
    country: "Belarus",
    capital: "Minsk",
    img: belarusHeadIMg,
  },
  {
    id:6,
    country: "Belarus",
    capital: "Minsk",
    img: belarusHeadIMg,
  },
  {
    id:7,
    country: "Belarus",
    capital: "Minsk",
    img: belarusHeadIMg,
  },
  {
    id:8,
    country: "Belarus",
    capital: "Minsk",
    img: belarusHeadIMg,
  },
]
console.log(countrys);
      
const cards: any = countrys.map((item):any => {
  return <Card style={{ width: '18rem' }} key={item.id} className="card-country shadow-sm mb-5 bg-white rounded">
      <Card.Img variant="top" src={item.img}/>
          <Card.Body>
      <Card.Title>{item.country}</Card.Title>
      <Card.Text>
      {item.capital}
      </Card.Text>
      <Button variant="primary">More details</Button>
      </Card.Body>
      </Card>
});
    return (
      <Container className="main bg-warning d-flex justify-content-between flex-wrap ">
        {cards}
      </Container>
    );
};

export default Main;
