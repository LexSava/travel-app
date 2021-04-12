import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import {   
  BrowserRouter as Router,
  Route,
  Switch
  } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Country from "./components/Country/Country";

import Footer from "./components/Footer/Footer";
import { ICountries } from "./utils/interfaces";
import TravelAppService from "./services/TravelAppService";
import useLocalStorage from "./hooks/useLocalStorage";

function App(props: JSX.IntrinsicAttributes) {
  const [countries, setCountries] = useState<ICountries[] | null>(null);
  const [search, setSearch] = useState<any>(countries);
  const [countrysCard, setcountrysCard] = useState<any>(search);

  const [selectedLanguage, setSelectedLanguage] = useLocalStorage("en", "");

  const processSelectedLanguage = (val: any) => {
    setSelectedLanguage(val);
  };

  const processSearch = (text: string) => {
    setSearch(text);
    setcountrysCard(text);
  };

  const getCountriesApi = (): Promise<void> =>
    TravelAppService.getCountries()
      .then((info: ICountries[]) => {
        console.log("country: " + info[1]._id);
        setSearch(info);
        setcountrysCard(info);
        setCountries(info);
      })
      .catch((e) => console.log("getCountries error: " + e));

  useEffect(() => {
    if (!countries) {
      getCountriesApi();
    }
  });

  return countries ? (
    <Router {...props}>
      <div className="App">
        <Header
          countrys={countries}
          onSearch={processSearch}
          onSelectedLanguage={processSelectedLanguage}
        />
        <Switch>
          <Route path="/:country">
            <Country countries={countries} conveyLanguage={selectedLanguage} />
          </Route>
          <Route path="/">
            <Main
              countrysCard={countrysCard}
              conveyLanguage={selectedLanguage}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  ) : (
    <div className="spinner-wrapper">
      <Spinner animation="border" variant="primary" />
      <span>Loading countries...</span>
    </div>
  );
}

export default App;
