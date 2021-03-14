import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Country from './components/Country/Country';
import Footer from './components/Footer/Footer';
import { ICountrys } from './utils/interfaces';

import belarusHeadIMg from './assets/img/belarus.jpg';
import ukraineHeadIMg from './assets/img/ukraine.jpg';
import lithuaniaHeadIMg from './assets/img/lithuania.jpg';
import italyaHeadIMg from './assets/img/italya.jpg';
import portugalHeadIMg from './assets/img/portugal.jpg';
import spainHeadIMg from './assets/img/spain.jpg';
import netherlandsHeadIMg from './assets/img/netherlands.jpg';
import canadaHeadIMg from './assets/img/canada.jpg';

function App() {
  const [countrys, setCountrys] = useState<ICountrys[]>([
    {
      id: 1,
      country: 'Belarus',
      capital: 'Minsk',
      img: belarusHeadIMg,
    },
    {
      id: 2,
      country: 'Ukraine',
      capital: 'Kiev',
      img: ukraineHeadIMg,
    },
    {
      id: 3,
      country: 'Lithuania',
      capital: 'Vilnius',
      img: lithuaniaHeadIMg,
    },
    {
      id: 4,
      country: 'Italy',
      capital: 'Rome',
      img: italyaHeadIMg,
    },
    {
      id: 5,
      country: 'Portugal',
      capital: 'Lisbon',
      img: portugalHeadIMg,
    },
    {
      id: 6,
      country: 'Spain',
      capital: 'Madrid',
      img: spainHeadIMg,
    },
    {
      id: 7,
      country: 'Netherlands',
      capital: 'Amsterdam',
      img: netherlandsHeadIMg,
    },
    {
      id: 8,
      country: 'Canada',
      capital: 'Ottawa',
      img: canadaHeadIMg,
    },
  ]);

  const [search, setSearch] = useState<any>(countrys);
  const [countrysCard, setcountrysCard] = useState<any>(search);
  const processSearch = (text: string) => {
    setSearch(text);
    setcountrysCard(text);
  };

  return (
    <div className='App'>
      <Header countrys={countrys} onSearch={processSearch} />
      <Main countrysCard={countrysCard} />
      {/* <Country countryInfo={countrys[0]} /> */}
      <Footer />
    </div>
  );
}

export default App;
