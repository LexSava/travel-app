import { AnyAction } from 'redux'
import { AppState, Language } from './interfaces'

export const initialState: AppState = {
  countryList: [],
  lang: Language.en,
  filterString: '',
  utcOffset: 3,
  isSideBarOpened: false,
  user: null,
  weatherParams: null,
  country: null,
}

const appReducer = (state = initialState, action: AnyAction) => {
  switch(action.type){

    case 'GET_COUNTRY_LIST' :
      return ({
        ...state,
        countryList : action.countryList,
        country: null,
      })

    case 'COUNTRY_CHANGE' :
      return ({
        ...state,
        country : action.country
      })

    case 'LANGUAGE_CHANGE' :
      return ({
        ...state,
        lang : action.lang
      })

    case 'FILTER_STRING_CHANGED' :
      return ({
        ...state,
        filterString : action.filterString
      })

    case 'UTC_OFFSET_CHANGE' :
      return ({
        ...state,
        utcOffset : action.utcOffset
      })

    case 'GET_WEATHER_PARAMS' :
      return ({
        ...state,
        weatherParams : action.weatherParams
      })

    case 'TOGGLE_SIDE_BAR' :
      return ({
        ...state,
        isSideBarOpened : action.isSideBarOpened
      })

    case 'SET_USER' :
      return ({
        ...state,
        user: action.user
      })

    default:
      return state
  }
}

export default appReducer;