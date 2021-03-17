import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { AppThunk, RootState } from '../../redux/store';
import {
  emptyCountry,
  emptyCountryInfo,
  ICountry,
  ICountryInfo,
} from '../../common/interfaces/countryInterfaces';
import { emptyPlace, IPlace } from '../../common/interfaces/placeInterface';
import {
  createEmptyCountries,
  createEmptyPlaces,
  flatCountries,
  flatPlaces,
} from './editorHelpers';
import { Languages } from '../../common/enums/languages';
import { addCountries } from '../../api/services/countryService';
import { addPlaces } from '../../api/services/placeService';

export interface ICountries {
  [key: string]: ICountry;
}

export interface IPlaces {
  [key: string]: IPlace;
}

interface EditorState {
  isSave: boolean;
  info: ICountryInfo;
  countries: ICountries;
  places: IPlaces[];
}

export enum CountryField {
  name = 'name',
  capital = 'capital',
  description = 'description',
  videoUrl = 'videoUrl',
}

export enum PlaceField {
  name = 'name',
  description = 'description',
}

const initialState: EditorState = {
  isSave: false,
  info: _.cloneDeep(emptyCountryInfo),
  countries: createEmptyCountries(),
  places: Array(6).fill(createEmptyPlaces()),
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setCountryInfo: (state, action: PayloadAction<ICountryInfo>) => {
      state.info = action.payload;
      state.countries[Languages.en].name = action.payload.name;
      state.countries[Languages.en].capital = action.payload.capital;
      for (let lang of Object.values(Languages)) {
        state.countries[lang].alpha3Code = action.payload.alpha3Code;
      }
      for (let places of state.places) {
        for (let lang of Object.values(Languages)) {
          places[lang].alpha3Code = action.payload.alpha3Code;
        }
      }
    },
    setCountryImage: (state, action: PayloadAction<string>) => {
      for (let lang of Object.values(Languages)) {
        state.countries[lang].imgUrl = action.payload;
      }
    },
    setCountryField: (
      state,
      action: PayloadAction<{
        field: CountryField;
        value: string;
        lang: Languages;
      }>,
    ) => {
      const { field, value, lang } = { ...action.payload };
      state.countries[lang][field] = value;
    },
    setPlaceImage: (
      state,
      action: PayloadAction<{ id: number; url: string }>,
    ) => {
      const { id, url } = { ...action.payload };
      for (let lang of Object.values(Languages)) {
        state.places[id][lang].imgUrl = url;
      }
    },
    setPlaceField: (
      state,
      action: PayloadAction<{
        id: number;
        field: PlaceField;
        value: string;
        lang: Languages;
      }>,
    ) => {
      const { id, field, value, lang } = { ...action.payload };
      state.places[id][lang][field] = value;
    },
    setIsSave: (state, action: PayloadAction<boolean>) => {
      state.isSave = action.payload;
    },
  },
});

export const {
  setCountryInfo,
  setCountryImage,
  setCountryField,
  setPlaceImage,
  setPlaceField,
  setIsSave,
} = editorSlice.actions;

export const save = (): AppThunk => async (dispatch, getState) => {
  dispatch(setIsSave(true));
  const state = getState();
  const countries = flatCountries(state.editor.countries);
  const places = flatPlaces(state.editor.places);
  const result = await Promise.all([
    addCountries(countries),
    addPlaces(places),
  ]);
  dispatch(setIsSave(false));
};

export const countryInfoStore = (state: RootState) => state.editor.info;
export const countriesStore = (state: RootState) => state.editor.countries;
export const placesStore = (state: RootState) => state.editor.places;
export const isSaveStore = (state: RootState) => state.editor.isSave;

export default editorSlice.reducer;
