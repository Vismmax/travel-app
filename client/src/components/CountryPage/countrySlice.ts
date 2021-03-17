import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { AppThunk, RootState } from '../../redux/store';
import {
  getAllCountries,
  getGeo,
  getOneCountry,
} from '../../api/services/countryService';
import {
  emptyCountry,
  emptyCountryInfo,
  ICountry,
  ICountryFull,
  ICountryInfo,
} from '../../common/interfaces/countryInterfaces';
import { IPlace } from '../../common/interfaces/placeInterface';

interface CountryState {
  isLoading: boolean;
  country: ICountry;
  info: ICountryInfo;
  places: IPlace[];
}

const initialState: CountryState = {
  isLoading: false,
  country: _.cloneDeep(emptyCountry),
  info: _.cloneDeep(emptyCountryInfo),
  places: [],
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<ICountryFull>) => {
      state.country = action.payload.country;
      state.info = action.payload.info;
      state.places = action.payload.places;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setState, setIsLoading } = countrySlice.actions;

export const getCountry = (alpha3Code: string): AppThunk => async (
  dispatch,
  getState,
) => {
  dispatch(setIsLoading(true));
  const countryData = await getOneCountry({
    lang: getState().common.lang,
    alpha3Code,
  });
  countryData.info.geo = await getGeo(countryData.info.alpha3Code);
  dispatch(setState(countryData));
  dispatch(setIsLoading(false));
};

export const countryStore = (state: RootState) => state.country;

export default countrySlice.reducer;
