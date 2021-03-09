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
           <a href="https://github.com/LexSava" target="_blank" rel="noopener noreferrer">LexSava</a>
           <a href="https://github.com/dzmitrynz" target="_blank" rel="noopener noreferrer">dzmitryNz</a>
           <a href="https://github.com/Anastasia" target="_blank" rel="noopener noreferrer">Anastasia</a>
           <a href="https://github.com/inex" target="_blank" rel="noopener noreferrer">inex</a>
           <a className='footer__school' href="https://rs.school/react/">
           <img src="https://rollingscopes.com/images/logo_rs2.svg" alt="rsschool" />
           </a>
           <p>2021</p>
           <Localization/>
       </footer>
       </Container>
    );
};

export default Footer;
