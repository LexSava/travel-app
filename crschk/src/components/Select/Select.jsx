import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../utils/actions';
import { getLocales } from '../../utils/api';

import './Select.scss';

export default function Select() {
  const [locales, setLocales] = useState(null);
  const { locale } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    getLocales()
      .then(setLocales)
  }, [])

  const setLanguage = (e) => {
    dispatch({type: actions.SET_LOCALE, payload: e.target.value})
  }

  return (
    <select className="language-select" value={locale} onChange={setLanguage}>
      { locales &&
        locales.map((lang, i) => (
          <option key={i} value={lang.lang}>{lang.name}</option>
        ))
      }
    </select>
  )
}