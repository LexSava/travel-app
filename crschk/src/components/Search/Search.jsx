import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchImg from '../../assets/img/search.png';
import crossImg from '../../assets/img/cross.png';
import actions from '../../utils/actions';

import './Search.scss';

export default function Search() {
  const { dict } = useSelector((state) => state);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const submitAction = (e) => {
    e.preventDefault();
    dispatch({type: actions.SEARCH, payload: value});
  }

  return (
    <form className='search-form' onSubmit={submitAction}>
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)} className='search-form--input' autoFocus placeholder={dict.SEARCH_PLACEHOLDER}/>
      { value !== '' &&
        <img src={crossImg} alt='delete' className='search-form--cross' onClick={() => {setValue(''); dispatch({type: actions.SEARCH, payload: ''})}}/>
      }
      <button type='submit' className='search-form--button'>
        <img src={searchImg} alt='Search'/>
      </button>
    </form>
  )
}