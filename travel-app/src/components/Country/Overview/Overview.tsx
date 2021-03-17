import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, Image } from 'react-bootstrap';
import './Overview.scss';

import CountryType from "./../../../types/CountryModel";
import DateWidget from "../../DateWidget/DateWidget";
import ExchangeRates from "../../ExchangeRates/ExchangeRates";
import Weather from "../../Weather/Weather";
import Video from "../../Video/Video";

type OverviewProps = {
  countryInfo: ICountries;
  conveyLanguage: string;
};

const Overview = ({ countryInfo, conveyLanguage }: OverviewProps) => {
  return (
    <div className="country-overview">
      <Jumbotron fluid style={{ backgroundImage: `url(${countryInfo.img})` }}>
        <Container className="position-relative">
          <Container className="d-flex widget-block mb-2">
            <ExchangeRates
              conveyLanguage={conveyLanguage}
              countryInfo={countryInfo}
            />
            <DateWidget
              conveyLanguage={conveyLanguage}
              countryInfo={countryInfo}
            />
            <Weather
              countryInfo={countryInfo}
              conveyLanguage={conveyLanguage}
            />
          </Container>
          <div className='country-overview__main'>
            <Image
              className='country-overview__main__image'
              src={countryInfo.photoSrc1}
              rounded
            />
            <div className='country-overview__main__content'>
              <div className='country-overview__main__content__capital'>
                <h1 className='text-primary overview-title'>
                  {countryInfo.nameEn}
                </h1>
                <h2 className='text-capital'>{countryInfo.capitalEn}</h2>
              </div>
            </div>
          </div>

          <p className='country-overview__description'>
            {countryInfo.articleEn}
          </p>
          <Video videoSrc={countryInfo.videoEn} />
        </Container>
      </Jumbotron>
      <Container></Container>
    </div>
  );
};

export default Overview;
