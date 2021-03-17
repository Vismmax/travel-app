import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { Languages } from '../../common/enums/languages';

interface CommonState {
  lang: Languages;
}

const initialState: CommonState = {
  lang: Languages.en,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<Languages>) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = commonSlice.actions;

export const langStore = (state: RootState) => state.common.lang;

export default commonSlice.reducer;
