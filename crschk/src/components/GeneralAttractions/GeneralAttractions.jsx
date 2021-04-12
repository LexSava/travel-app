import React from 'react';
import AttractionsRating from '../AttractionsRating/AttractionsRating';
import Swiper from '../Swiper/Swiper';

import './GeneralAttractions.scss';

function GeneralAttractions({ countryState }) {
  const [currentImage, setCurrentImage] = React.useState(0);
  return (
    <div className="attractions">
      <div className="container">
        <Swiper countryState={countryState} setCurrentImage={setCurrentImage} />
        <AttractionsRating currentImage={currentImage} countryState={countryState} />
      </div>
    </div>
  );
}

export default GeneralAttractions;
