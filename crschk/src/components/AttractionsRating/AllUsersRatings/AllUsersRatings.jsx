import React from 'react';
import './AllUsersRatings.scss';

function AllUsersRatings({ ratings }) {
  return (
    <div className="all-users-ratings">
      {ratings.map((el, index) => (
        <div className={`all-users-ratings__user${index} user`} key={index}>
          <img className={`all-users-ratings__user_avatar`} src={el.user.avatar} />
          <h3 className={`all-users-ratings__user_name`}>{el.user.login}</h3>
          <span className={`all-users-ratings__user_score`}>
            {Array(5)
              .fill(null)
              .map((e, index) => (
                <div
                  className={`attractions-rating__my-rating_point attractions-rating__point_${
                    index >= el.score ? 'disabled' : 'selected'
                  }`}
                  key={index}></div>
              ))}
          </span>
        </div>
      ))}
    </div>
  );
}

export default AllUsersRatings;
