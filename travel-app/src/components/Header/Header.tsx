import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.scss";
import { Button, Form, FormControl, Container } from "react-bootstrap";
import logo from "../../assets/img/logo.jpg";

interface HeaderProps {
  onSearch(text: string): void;
  onSelectedLanguage(val: string): void;
  countrys: any;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [inputText, setInputText] = useState<string>("");
  const [language, srtLanguage] = useState<string>("");

  const inputLog = (): void => {
    let matches: any = props.countrys.filter((state: any) => {
      const regex: any = new RegExp(`^${inputText}`, "gi");
      return state.country.match(regex) || state.capital.match(regex);
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
    inputLog();
  };

  const changeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onSelectedLanguage(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      inputLog();
      event.preventDefault();
    }
  };

  (function displayAllCards(): void {
    if (inputText.length === 0) {
      props.onSearch(props.countrys);
    }
  })();

  return (
    <Container className="header-block">
      <header className="d-flex justify-content-between flex-wrap header">
        <div className="logo-block d-flex">
          <img src={logo} alt="logo" className="logo text-warning" />
          <h1 className="head text-primary ">Travel Now</h1>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          <Form inline>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-sm-2"
              autoFocus
              value={inputText}
              onChange={changeHandle}
              onInput={changeHandle}
              onKeyPress={keyPressHandler}
            ></FormControl>
            <Button variant="outline-info" onClick={inputLog}>
              Search
            </Button>
          </Form>

          <Form inline className="ml-5">
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control as="select" custom onChange={changeLanguage}>
                <option value="en">en</option>
                <option value="ru">ru</option>
                <option value="be">be</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
      </header>
    </Container>
  );
};

export default Header;
