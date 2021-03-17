import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { Languages } from '../../common/enums/languages';

interface CommonState {
  lang: Languages;
  search: string;
}

const initialState: CommonState = {
  lang: Languages.en,
  search: '',
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<Languages>) => {
      state.lang = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setLang, setSearch } = commonSlice.actions;

export const langStore = (state: RootState) => state.common.lang;
export const searchStore = (state: RootState) => state.common.search;

export default commonSlice.reducer;
