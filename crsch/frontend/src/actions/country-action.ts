import { ICountryFull} from '../interfaces';

export const onCountryChanged = (country: ICountryFull) => ({type: 'COUNTRY_CHANGE', country})
