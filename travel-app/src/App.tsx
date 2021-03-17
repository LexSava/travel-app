import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Country from "./components/Country/Country";
import Footer from "./components/Footer/Footer";
import { ICountrys } from "./utils/interfaces";
import useLocalStorage from "./hooks/useLocalStorage";
import belarusHeadIMg from "./assets/img/belarus.jpg";
import ukraineHeadIMg from "./assets/img/ukraine.jpg";
import lithuaniaHeadIMg from "./assets/img/lithuania.jpg";
import italyaHeadIMg from "./assets/img/italya.jpg";
import portugalHeadIMg from "./assets/img/portugal.jpg";
import spainHeadIMg from "./assets/img/spain.jpg";
import netherlandsHeadIMg from "./assets/img/netherlands.jpg";
import canadaHeadIMg from "./assets/img/canada.jpg";

function App() {
  const [countrys, setCountrys] = useState<ICountrys[]>([
    {
      id: 1,
      country: "Belarus",
      capital: "Minsk",
      img: belarusHeadIMg,
      timeZone: "Europe/Minsk",
    },
    {
      id: 2,
      country: "Ukraine",
      capital: "Kiev",
      img: ukraineHeadIMg,
      timeZone: "Europe/Kiev",
    },
    {
      id: 3,
      country: "Lithuania",
      capital: "Vilnius",
      img: lithuaniaHeadIMg,
      timeZone: "Europe/Vilnius",
    },
    {
      id: 4,
      country: "Italy",
      capital: "Rome",
      img: italyaHeadIMg,
      timeZone: "Europe/Rome",
    },
    {
      id: 5,
      country: "Portugal",
      capital: "Lisbon",
      img: portugalHeadIMg,
      timeZone: "Europe/Lisbon",
    },
    {
      id: 6,
      country: "Spain",
      capital: "Madrid",
      img: spainHeadIMg,
      timeZone: "	Europe/Madrid",
    },
    {
      id: 7,
      country: "Netherlands",
      capital: "Amsterdam",
      img: netherlandsHeadIMg,
      timeZone: "Europe/Amsterdam",
    },
    {
      id: 8,
      country: "Canada",
      capital: "Ottawa",
      img: canadaHeadIMg,
      timeZone: "Canada/Eastern",
    },
  ]);

  const [search, setSearch] = useState<any>(countrys);
  const [countrysCard, setcountrysCard] = useState<any>(search);

  const [selectedLanguage, setSelectedLanguage] = useLocalStorage("en", "");

  const processSelectedLanguage = (val: any) => {
    setSelectedLanguage(val);
  };

  const processSearch = (text: string) => {
    setSearch(text);
    setcountrysCard(text);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          countrys={countrys}
          onSearch={processSearch}
          onSelectedLanguage={processSelectedLanguage}
        />
        <Switch>
          <Route path="/:country">
            <Country countries={countrys} conveyLanguage={selectedLanguage} />
          </Route>
          <Route path="/">
            <Main countrysCard={countrysCard} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
