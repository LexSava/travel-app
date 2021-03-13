import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

import CountryType from './../../types/CountryModel';
import Overview from './Overview/Overview';
import Gallery from './Gallery/Gallery';
import TravelAppService from './../../services/TravelAppService';
import { ISights } from './../../utils/interfaces';

import "./Country.scss";

type CountryProps = {
  countryInfo: CountryType;
  conveyLanguage: string;
};

const Country = ({
  countryInfo,
  conveyLanguage,
}: CountryProps): JSX.Element => {
  const [sightsInfo, setSightsInfo] = useState<ISights[] | null>(null);

  const getCountrySightsApi = (): Promise<void> =>
    TravelAppService.getCountrySights(countryInfo.country)
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

  return (
    <div>
      <Overview countryInfo={countryInfo} conveyLanguage={conveyLanguage} />
      {gallery}
    </div>
  );
};

export default Country;
