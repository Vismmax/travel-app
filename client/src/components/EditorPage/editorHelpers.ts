import _ from 'lodash';
import { Languages } from '../../common/enums/languages';
import {
  emptyCountry,
  ICountry,
} from '../../common/interfaces/countryInterfaces';
import { emptyPlace, IPlace } from '../../common/interfaces/placeInterface';
import { ICountries, IPlaces } from './editorSlice';

export const createEmptyCountries = (): ICountries => {
  const objLanguages: ICountries = {};
  for (let lang of Object.values(Languages)) {
    // objLanguages[lang] = emptyCountry;
    objLanguages[lang] = _.cloneDeep(emptyCountry);
    objLanguages[lang].lang = lang;
  }
  return objLanguages;
};

export const createEmptyPlaces = (): IPlaces => {
  const objLanguages: IPlaces = {};
  for (let lang of Object.values(Languages)) {
    // objLanguages[lang] = emptyPlace;
    objLanguages[lang] = _.cloneDeep(emptyPlace);
    objLanguages[lang].lang = lang;
  }
  return objLanguages;
};

export const flatCountries = (objCountries: ICountries): ICountry[] => {
  const arrCountries: ICountry[] = [];
  for (let lang of Object.values(Languages)) {
    arrCountries.push(objCountries[lang]);
  }
  return arrCountries;
};

export const flatPlaces = (arrObjPlaces: IPlaces[]): IPlace[] => {
  const arrPlaces: IPlace[] = [];
  for (let objPlaces of arrObjPlaces) {
    for (let lang of Object.values(Languages)) {
      arrPlaces.push(objPlaces[lang]);
    }
  }
  return arrPlaces;
};
