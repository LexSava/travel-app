import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import CountryPromo from "../../components/CountryPromo/CountryPromo";
import GeneralAttractions from "../../components/GeneralAttractions/GeneralAttractions";
import YouTubeVideo from "../../components/Video/YouTubeVideo";

import './Country.scss';
import { getCountry, getLocaleTxt } from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../utils/actions';

function Country() {
  const { locale } = useSelector(state => state);
  const dispatch = useDispatch();

  const [countryState, setCountryState] = React.useState(null);

  let { ISOCode } = useParams();

  React.useEffect(() => {
    getLocaleTxt(locale).then((res) => dispatch({ type: actions.ADD_LOCALE, payload: res }));
    getCountry(locale, ISOCode)
      .then((res) => setCountryState(res))
  }, [locale]);

  return (
    <div className="country">
      <Header />
      {countryState && (
        <React.Fragment>
          <CountryPromo countryState={countryState} />
          <GeneralAttractions countryState={countryState} />
          <Map data={countryState} />
          <section className="video">
            <div
              className="video-wrapper"
              style={{ backgroundImage: `url(${countryState.promo})` }}
            >
              <h2 className="video__title">{countryState.name}</h2>
              <YouTubeVideo videoId={countryState.videoUrl} />
            </div>
          </section>
        </React.Fragment>
      )}
      <Footer />
    </div>
  );
}

export default Country;
