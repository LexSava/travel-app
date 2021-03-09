import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';
import { Container } from 'react-bootstrap';
import { ImageAlt } from 'react-bootstrap-icons';
import Localization from "../Localization/Localization";

const Footer = () => {

    return (
        <Container className="footer-block">
       <footer className="d-flex justify-content-between flex-wrap header">
           <div className="logo-block d-flex">
           <ImageAlt className="logo text-warning"/>
           <h1 className="head text-primary">Travel App</h1>
           </div>
           <Localization/>
       </footer>
       </Container>
    );
};

export default Footer;
