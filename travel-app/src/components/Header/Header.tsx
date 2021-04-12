import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.scss";
import { Button, Form, FormControl, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
import useLocalStorage from "../../hooks/useLocalStorage";
// import Register from "./components/User/Register";
interface HeaderProps {
  onSearch(text: string): void;
  onSelectedLanguage(val: string): void;
  countrys: any;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [inputText, setInputText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [loginText, setLoginText] = useState<string>("");
  const [language, setLanguage] = useLocalStorage("en", "");

  useEffect(() => {
    if (language === "en") {
      setSearchText("Search");
      setLoginText("Register/Login");
    } else if (language === "ru") {
      setSearchText("Поиск");
      setLoginText("Регистрация / Войти");
    } else {
      setSearchText("Пошук");
      setLoginText("Рэгiстрацыя / Увайсцi");
    }
  }, [language]);

  const inputLog = (): void => {
    let matches: any = props.countrys.filter((state: any) => {
      const regex: any = new RegExp(`^${inputText}`, "gi");
      if (language === "en") {
        return state.nameEn.match(regex) || state.capitalEn.match(regex);
      } else if (language === "ru") {
        return state.nameRu.match(regex) || state.capitalRu.match(regex);
      } else {
        return state.nameBe.match(regex) || state.capitalBe.match(regex);
      }
    });
    if (inputText.length === 0) {
      matches = [];
    } else {
      props.onSearch(matches);
    }
  };

  const openSignupForm = () => {
    dispatch({
      type: actions.SET_AUTHFORM,
      payload: { isFormOpen: true, isSignup: true },
    });
  };

  // const openSigninForm = () => {
  //   dispatch({
  //     type: actions.SET_AUTHFORM,
  //     payload: { isFormOpen: true, isSignup: false },
  //   });
  // };

  const setUser = (user) => {
    dispatch({ type: actions.SET_USER, user: user });
  };
  const closeAuthForm = (e) => {
    if (!e) {
      dispatch({
        type: actions.SET_AUTHFORM,
        payload: { isFormOpen: false }
      });
    } else if (e.target === e.currentTarget) {
      dispatch({
        type: actions.SET_AUTHFORM,
        payload: { isFormOpen: false }
      });
    }
  };  

  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    inputLog();
  };

  const changeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
    props.onSelectedLanguage(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      inputLog();
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (inputText.length === 0) {
      props.onSearch(props.countrys);
    }
    inputLog();
  }, [inputText]);

  return (
      <Container className="header-block">
      <header className="d-flex justify-content-between flex-wrap header">
        <Link to="/" className="link-logo-block">
          <div className="logo-block d-flex">
            <img src={logo} alt="logo" className="logo text-warning" />
            <h1 className="head text-primary ">Travel Now</h1>
          </div>
        </Link>
        <div className="d-flex justify-content-between flex-wrap frorm-block">
        <Form inline>
        <Button className="login-button btn btn-primary" 
                type="button" 
                onClick={openSignupForm}>
          { loginText }
        </Button>
            <FormControl
              type="search"
              placeholder={searchText}
              className="mr-sm-2"
              autoFocus
              value={inputText}
              onChange={changeHandle}
              onInput={changeHandle}
              onKeyPress={keyPressHandler}
            ></FormControl>
            <Button variant="outline-info" onClick={inputLog}>
              {searchText}
            </Button>
          </Form>
          <Form inline className="ml-5 language-select">
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control
                as="select"
                custom
                value={language}
                onChange={changeLanguage}
              >
                <option value="en">en</option>
                <option value="ru">ru</option>
                <option value="be">be</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
        { Register.isFormOpen &&
        <Register isSignup={Register.isSignup} 
        setUser={setUser} 
        closeForm={closeAuthForm} />}
      </header>
    </Container>
  );
};

export default Header;
