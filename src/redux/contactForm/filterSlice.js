import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  filter: '',
};

export const slice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { setFilter } = slice.actions;
