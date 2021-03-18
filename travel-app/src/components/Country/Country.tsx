import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Overview from './Overview/Overview';
import Gallery from './Gallery/Gallery';
import TravelAppService from './../../services/TravelAppService';
import { ISights, ICountries } from './../../utils/interfaces';
import MapCountry from './Map/Map';

import './Country.scss';

interface CountryProps {
  countries: ICountries[];
  conveyLanguage: string;
}

const Country = ({ countries, conveyLanguage }: CountryProps): JSX.Element => {
  const [sightsInfo, setSightsInfo] = useState<ISights[] | null>(null);
  let { country } = useParams<{ country: string }>();
  let countryInfo = countries.find((countries) => countries.nameEn === country);

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
    <Gallery sightsInfo={sightsInfo} conveyLanguage={conveyLanguage}/>
  ) : (
    <div className='spinner-wrapper'>
      <Spinner animation='border' variant='primary' />
      <span>Loading Gallery...</span>
    </div>
  );

  const notFoundElement: JSX.Element = (
    <h1>{`Oops! Country ${country} not found.`}</h1>
  );

  const overview: JSX.Element =
    typeof countryInfo === 'undefined' ? (
      notFoundElement
    ) : (
      <Overview countryInfo={countryInfo} conveyLanguage={conveyLanguage} />
    );

  const map: JSX.Element =
    typeof countryInfo === 'undefined' ? (
      notFoundElement
    ) : (
      <MapCountry
        latlng={countryInfo.latlng}
        coordinates={countryInfo.coordinates}
      />
    );

  return (
    <div>
      {overview}
      {map}
      {gallery}
    </div>
  );
};

export default Country;
