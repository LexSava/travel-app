import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';
import { ImageAlt } from 'react-bootstrap-icons';
import Search from "../Search/Search";
import Localization from "../Localization/Localization";
import { Container } from 'react-bootstrap';

const Header = () => {

    return (
        <Container className="header-block">
       <header className="d-flex justify-content-between flex-wrap header">
           <div className="logo-block d-flex">
           <ImageAlt className="logo text-warning"/>
           <h1 className="head text-primary">Travel App</h1>
           </div>
           <Search/>
           <Localization/>
       </header>
       </Container>
    );
};

export default Header;
