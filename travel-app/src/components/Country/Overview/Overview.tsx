import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, Image } from 'react-bootstrap';
import './Overview.scss';

import CountryType from './../../../types/CountryModel';

type OverviewProps = {
  countryInfo: CountryType;
};

const Overview = ({ countryInfo }: OverviewProps) => {
  return (
    <div className='country-overview'>
      <Jumbotron fluid style={{ backgroundImage: `url(${countryInfo.img})` }}>
        <Container>
          <div className='country-overview__main'>
            <Image
              className='country-overview__main__image'
              src={countryInfo.img}
              rounded
            />
            <div className='country-overview__main__content'>
              <div className='country-overview__main__content__capital'>
                <h1 className='text-primary overview-title'>
                  {countryInfo.country}
                </h1>
                <h2 className='text-capital'>{countryInfo.capital}</h2>
              </div>
            </div>
          </div>

          <p className='country-overview__description'>
            Belarus,[a] officially the Republic of Belarus,[b] is a landlocked
            country in Eastern Europe. It is bordered by Russia to the east and
            northeast, Ukraine to the south, Poland to the west, and Lithuania
            and Latvia to the northwest. Covering an area of 207,600 square
            kilometres (80,200 sq mi) and with a population of 9.4 million,
            Belarus is the thirteenth-largest and the twentieth-most populous
            country in Europe. The country is administratively divided into
            seven regions, and is one of the world's most urbanized, with over
            40% of its total land area forested. Minsk is the country's capital
            and largest city.
          </p>
        </Container>
      </Jumbotron>
      <Container></Container>
    </div>
  );
};

export default Overview;
