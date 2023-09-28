import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactForm/contactsSlice';
import { filterReducer } from './contactForm/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
