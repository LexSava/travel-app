import { ISights, ICountries } from './../utils/interfaces';

export default class TravelAppService {
  static readonly apiBase: string = 'http://travelapp.tk:3000/';

  static async getResource(url: string) {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  static async getCountrySights(country: string): Promise<ISights[]> {
    const sights: Promise<ISights[]> = await this.getResource(
      `showplaces/country/${country}`
    );
    return sights;
  }

  static async getCountries(): Promise<ICountries[]> {
    const countries: Promise<ICountries[]> = await this.getResource('');
    return countries;
  }
}
