import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import editorReducer from '../components/EditorPage/editorSlice';
import commonReducer from '../components/common/commonSlice';
import countriesReducer from '../components/HomePage/countriesSlice';
import countryReducer from '../components/CountryPage/countrySlice';

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    common: commonReducer,
    countries: countriesReducer,
    country: countryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
