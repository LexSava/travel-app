import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Image } from "react-bootstrap";
import "./Overview.scss";
import React, { useEffect, useState } from "react";
import { ICountries } from "./../../../utils/interfaces";
import CountryType from "./../../../types/CountryModel";
import DateWidget from "../../DateWidget/DateWidget";
import Weather from "../../Weather/Weather";
import ExchangeRates from "../../ExchangeRates/ExchangeRates";
import Video from "../../Video/Video";

type OverviewProps = {
  countryInfo: ICountries;
  conveyLanguage: string;
};

const Overview = ({ countryInfo, conveyLanguage }: OverviewProps) => {
  const [countryName, setCountryName] = useState<string>("");
  const [capitalName, setCapitalName] = useState<string>("");
  const [countryTextInfo, setCountryTextInfo] = useState<string>("");
  const [countryVideoInfo, setCountryVideoInfo] = useState<string>("");

  useEffect(() => {
    if (conveyLanguage === "en") {
      setCountryName(countryInfo.nameEn);
      setCapitalName(countryInfo.capitalEn);
      setCountryTextInfo(countryInfo.articleEn);
      setCountryVideoInfo(countryInfo.videoEn);
    } else if (conveyLanguage === "ru") {
      setCountryName(countryInfo.nameRu);
      setCapitalName(countryInfo.capitalRu);
      setCountryTextInfo(countryInfo.articleRu);
      setCountryVideoInfo(countryInfo.videoRu);
    } else {
      setCountryName(countryInfo.nameBe);
      setCapitalName(countryInfo.capitalBe);
      setCountryTextInfo(countryInfo.articleBe);
      setCountryVideoInfo(countryInfo.videoBe);
    }
  }, [conveyLanguage]);

  return (
    <div className="country-overview">
      <Jumbotron
        fluid
        style={{ backgroundImage: `url(${countryInfo.photoSrc1})` }}
      >
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
          <div className="country-overview__main ">
            <Image
              className="country-overview__main__image"
              src={countryInfo.photoSrc1}
              rounded
            />
            <div className="country-overview__main__content">
              <div className="country-overview__main__content__capital">
                <h1 className="text-primary overview-title">{countryName}</h1>
                <h2 className="text-capital">{capitalName}</h2>
              </div>
            </div>
          </div>

          <p className="country-overview__description">{countryTextInfo}</p>
          <Video videoSrc={countryVideoInfo} />
        </Container>
      </Jumbotron>
      <Container></Container>
    </div>
  );
};

export default Overview;
