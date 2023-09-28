import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContactThunk,
  deleteContactThunk,
} from './operations';

export const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

export const slice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items.push(...action.payload);
      })

      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== item.payload.id);
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContactThunk.fulfilled,
          deleteContactThunk.fulfilled
        ),
        (state, action) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContactThunk.pending,
          deleteContactThunk.pending
        ),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
