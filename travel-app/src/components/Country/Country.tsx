import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { RouteComponentProps, useParams } from 'react-router-dom';

import CountryType from './../../types/CountryModel';
import Overview from './Overview/Overview';
import Gallery from './Gallery/Gallery';
import TravelAppService from './../../services/TravelAppService';
import { ISights, ICountrys } from './../../utils/interfaces';

import './Country.scss';

interface CountryProps {
  countries: ICountrys[];
  conveyLanguage: string;
}

const Country = ({ countries, conveyLanguage }: CountryProps): JSX.Element => {
  const [sightsInfo, setSightsInfo] = useState<ISights[] | null>(null);
  let { country } = useParams<{ country: string }>();
  let countryInfo = countries.find(
    (countries) => countries.country === country
  );

  const getCountrySightsApi = (): Promise<void> =>
    TravelAppService.getCountrySights(country)
      .then((info: ISights[]) => {
        setSightsInfo(info);
      })
      .catch((e) => console.log('getCountrySightsApi error: ' + e));

  useEffect(() => {
    if (!sightsInfo) {
      getCountrySightsApi();
    }
  });

  const gallery: JSX.Element = sightsInfo ? (
    <Gallery sightsInfo={sightsInfo} />
  ) : (
    <div className='spinner-wrapper'>
      <Spinner animation='border' variant='primary' />
      <span>Loading Gallery...</span>
    </div>
  );

  const overview: JSX.Element =
    typeof countryInfo === 'undefined' ? (
      <h1>{`Oops! Country ${country} not found.`}</h1>
    ) : (
      <Overview countryInfo={countryInfo} conveyLanguage={conveyLanguage} />
    );

  return (
    <div>
      {overview}
      {gallery}
    </div>
  );
};

export default Country;
