import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../redux/store';
import { getAllCountries } from '../../api/services/countryService';
import { ICountry } from '../../common/interfaces/countryInterfaces';

// type CountriesState = ICountry[];

interface CountriesState {
  isLoading: boolean;
  countries: ICountry[];
}

const initialState: CountriesState = {
  isLoading: false,
  countries: [],
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<ICountry[]>) => {
      state.countries = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setState, setIsLoading } = countriesSlice.actions;

export const getCountries = (): AppThunk => async (dispatch, getState) => {
  dispatch(setIsLoading(true));
  const countries = await getAllCountries({ lang: getState().common.lang });
  dispatch(setState(countries));
  dispatch(setIsLoading(false));
};

export const countriesStore = (state: RootState) => state.countries.countries;
export const isLoadingStore = (state: RootState) => state.countries.isLoading;

export default countriesSlice.reducer;
