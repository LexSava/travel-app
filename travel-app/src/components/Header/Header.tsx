import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.scss";
// import Search from "../Search/Search";
import Localization from "../Localization/Localization";
import { Container } from "react-bootstrap";
import logo from "../../assets/img/logo.jpg";
import { Button, Form, FormControl } from "react-bootstrap";

// type HeaderProps = {
//   countrys: any;
// };
interface HeaderProps {
  onSearch(text: string): void;
  countrys: any;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [inputText, setInputText] = useState<string>("");

  const inputLog = (): void => {
    let matches: any = props.countrys.filter((state: any) => {
      const regex: any = new RegExp(`^${inputText}`, "gi");
      return state.country.match(regex);
    });
    if (inputText.length === 0) {
      matches = [];
      props.onSearch(props.countrys);
    } else {
      props.onSearch(matches);
    }
  };


  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      //   props.onSearch(inputText);
      inputLog();
      event.preventDefault();
    }
  };

  return (
    <Container className="header-block">
      <header className="d-flex justify-content-between flex-wrap header">
        <div className="logo-block d-flex">
          <img src={logo} alt="logo" className="logo text-warning" />
          <h1 className="head text-primary ">Travel Now</h1>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          {/* <Search countrys={countrys} /> */}

          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              autoFocus
              value={inputText}
              onChange={changeHandle}
              onKeyPress={keyPressHandler}
              //   onInput={(e: any) => setInputText(e.target.value)}
            />
            <Button variant="outline-info" onClick={inputLog}>
              Search
            </Button>
          </Form>

          <Localization />
        </div>
      </header>
    </Container>
  );
};

export default Header;
