import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';
import Search from "../Search/Search";
import Localization from "../Localization/Localization";
import { Container } from 'react-bootstrap';
import logo from "../../assets/img/logo.jpg";
const Header = () => {

    return (
        <Container className="header-block">
       <header className="d-flex justify-content-between flex-wrap header">
           <div className="logo-block d-flex">
           <img src={logo} alt="logo" className="logo text-warning"/>
           <h1 className="head text-primary ">Travel App</h1>
           </div>
          <div className="d-flex justify-content-between flex-wrap">
          <Search/>
           <Localization/>
          </div>
       </header>
       </Container>
    );
};

export default Header;
