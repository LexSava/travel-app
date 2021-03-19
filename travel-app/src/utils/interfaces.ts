export interface ICountrys {
  id: number;
  country: string;
  capital: string;
  img: any;
  timeZone: string;
}

export interface ICountries {
  _id: number;
  nameEn: string;
  nameRu: string;
  nameBe: string;
  capitalEn: string;
  capitalRu: string;
  capitalBe: string;
  photoSrc1: any;
  timeZone: string;
  articleEn: string;
  articleRu: string;
  articleBe: string;
  videoEn: string;
  videoRu: string;
  videoBe: string;
  latlng: number[];
  coordinates: any;
}

export interface ISights {
  id: number;
  nameRu: string;
  nameBe: string;
  nameEn: string;
  coord: string;
  articleRu: string;
  articleBe: string;
  articleEn: string;
  photoSrc1: string;
  votes: string;
  rating: number;
}
