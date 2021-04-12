import React from 'react';
import { Link } from "react-router-dom";

import './Card.scss';

export default function Card({name, capital, image, link}) {
  return (
    <Link to={`/${link}`} className='card-link'>
      <div className='card' style={{backgroundImage: `url(${image})`}}>
        <h2>{name}</h2>
        <h4>{capital}</h4>
      </div>
    </Link>
  )
}