import { ICountryFull } from "../interfaces";

export const onWeatherParamsChanged = ({ capital, coords }: ICountryFull) => ({type: 'GET_WEATHER_PARAMS', weatherParams: { capital, coords }})
