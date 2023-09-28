import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  contacts: [],
  filter: '',
};

export const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact, setFilter } = slice.actions;
