import React, { useEffect, useState } from 'react';
import AllUsersRatings from './AllUsersRatings/AllUsersRatings';
import './AttractionsRating.scss';
import { useSelector } from 'react-redux';
import { postAttractionRating } from '../../utils/api';

function AttractionsRating({ currentImage, countryState }) {
  const { attractions, ISOCode } = countryState;

  const [rating, setRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const { dict, user } = useSelector(state => state);

  const rateArr = Array(5).fill(null);

  const calcTotal = () => {
    let sum = 0;
    let count = 1;

    if (attractions[currentImage].ratings) {
      sum = attractions[currentImage].ratings.reduce((acc, rate) => acc + rate.score, 0);
      count = attractions[currentImage].ratings.length;
    }

    return Math.floor(sum / count)
  }

  useEffect(() => {
    setRating(0);

    if (attractions[currentImage].ratings) {
      attractions[currentImage].ratings.map((el) => {
        if (user && el.user.login === user.login) {
          setRating(el.score);
        }
      });
    }
    setTotalRating(calcTotal())
  }, [currentImage]);

  const getRating = (index) => {
    setRating(index + 1);

    postAttractionRating(ISOCode, attractions[currentImage].id, user.login, index + 1)

    if (!attractions[currentImage].ratings) {
      attractions[currentImage].ratings = [
        {
          user,
          score: index + 1
        }
      ]
    } else {
      attractions[currentImage].ratings.forEach((el) => {
        if (user && el.user.login === user.login) {
          el.score = index + 1;
        }
      });
    }

    setTotalRating(calcTotal())
  };

  return (
    <div className="info">
      <div className="attractions-rating__my-rating">
        { user &&
            <div className="rate-block">
              {rateArr.map((el, index) => (
                <div
                  className={`attractions-rating__my-rating_point attractions-rating__point_${
                    index >= rating ? 'disabled' : 'selected'
                  }`}
                  onClick={() => getRating(index)}
                  key={index}></div>
              ))}
              <h3>{dict.MY_RATING}: {rating}</h3>
            </div>
          }
          { !user &&
            <h3>{dict.LOGIN_RATE_MESSAGE}</h3>
          }
          { totalRating !== 0 &&
            <h3>{dict.TOTAL}: {totalRating}</h3>
          }
          { !totalRating &&
            <h3>{dict.TOTAL_MESSAGE}</h3>
          }
      </div>
      { attractions[currentImage].ratings && <>
        <button
          className={`button button__show-all-ratings`}
          onClick={() => (!showAll ? setShowAll(true) : setShowAll(false))}>
          {!showAll ? dict.SHOW_ALL_RATINGS : dict.HIDE_ALL_RATINGS}
        </button>
        {showAll && <AllUsersRatings ratings={attractions[currentImage].ratings} />}
      </>}
      <h3 className="info__title">{attractions[currentImage] && attractions[currentImage].name}</h3>
      <div className="info__description">{attractions[currentImage] && attractions[currentImage].description}</div>
    </div>
  );
}

export default AttractionsRating;
