import webApi from '../webApiHelper';
import {
  ICountry,
  ICountryFull,
  ICountryInfo,
} from '../../common/interfaces/countryInterfaces';

const URL = process.env.REACT_APP_BASE_API_URL + '/countries';

export interface IRequestGetAllCountries {
  lang: string;
}

export interface IRequestGetOneCountry {
  lang: string;
  alpha3Code: string;
}

export interface IResponseCheckCountry {
  info: ICountryInfo;
  isExistDB: boolean;
  isExist: boolean;
}

export interface IResponseAddCountry {}

export const checkCountry = async (
  country: string,
): Promise<IResponseCheckCountry> => {
  console.log('country', country);
  const url = URL + '/check';
  const response = (await webApi.get(url, {
    country,
  })) as IResponseCheckCountry;
  return response;
};

export const getAllCountries = async ({
  lang,
}: IRequestGetAllCountries): Promise<ICountry[]> => {
  const response = (await webApi.get(URL, { lang })) as ICountry[];
  return response;
};

export const getOneCountry = async ({
  lang,
  alpha3Code,
}: IRequestGetOneCountry): Promise<ICountryFull> => {
  const url = URL + `/${alpha3Code}`;
  const response = (await webApi.get(url, {
    lang,
  })) as ICountryFull;
  return response;
};

export const addCountries = async (
  countries: ICountry[],
): Promise<IResponseAddCountry> => {
  const response = (await webApi.post(URL, countries)) as IResponseAddCountry;
  return response;
};

export const getGeo = async (alpha3Code: string): Promise<any> => {
  const response = await webApi.get(`/geo/${alpha3Code}.geo.json`);
  return response;
};
