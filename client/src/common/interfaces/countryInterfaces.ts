import { IPlace } from './placeInterface';
import _ from 'lodash';

export interface ICountry {
  id?: number;
  alpha3Code: string;
  name: string;
  capital: string;
  description: string;
  imgUrl: string;
  videoUrl: string;
  lang: string;
  places?: IPlace[];
}

export const emptyCountry: ICountry = {
  alpha3Code: '',
  name: '',
  capital: '',
  description: '',
  imgUrl: '',
  videoUrl: '',
  lang: '',
  places: [],
};

export interface ICountryInfo {
  id?: number;
  name: string;
  capital: string;
  alpha2Code: string;
  alpha3Code: string;
  timezones: string;
  latCapital: number;
  lonCapital: number;
  currenciesCode: string;
  currenciesName: string;
  currenciesSymbol: string;
  flag: string;
  geo?: any;
  rates: {
    USD: number;
    EUR: number;
    RUB: number;
  };
}

export const emptyCountryInfo: ICountryInfo = {
  name: '',
  capital: '',
  alpha2Code: '',
  alpha3Code: '',
  timezones: '',
  latCapital: 0,
  lonCapital: 0,
  currenciesCode: '',
  currenciesName: '',
  currenciesSymbol: '',
  flag: '',
  rates: {
    USD: 1,
    EUR: 1,
    RUB: 1,
  },
};

export interface ICountryFull {
  country: ICountry;
  places: IPlace[];
  info: ICountryInfo;
}

export const emptyCountryFull: ICountryFull = {
  country: _.cloneDeep(emptyCountry),
  places: [],
  info: _.cloneDeep(emptyCountryInfo),
};
