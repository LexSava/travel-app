import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.scss";
import { Container } from "react-bootstrap";
import logo from "../../assets/img/logo.jpg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Container className="footer-block">
      <footer className="d-flex justify-content-between flex-wrap footer inline">
        <Link to="/" className="link-logo-block">
          <div className="logo-block d-flex">
            <img src={logo} alt="logo" className="logo text-warning" />
            <h1 className="head text-primary">Travel Now</h1>
          </div>
        </Link>
        <a
          href="https://github.com/LexSava"
          target="_blank"
          rel="noopener noreferrer"
          className="fw-bold"
        >
          Aliaksei
        </a>
        <a
          href="https://github.com/dzmitrynz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mitry
        </a>
        <a
          href="https://github.com/ivanova-anastasia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anastasiya
        </a>
        <a
          className="footer__school"
          href="https://rs.school/react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://rollingscopes.com/images/logo_rs2.svg"
            alt="rsschool"
          />
        </a>
        <p>2021</p>
      </footer>
    </Container>
  );
};

export default Footer;
