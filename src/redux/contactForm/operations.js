import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://651569e8dc3282a6a3ce5b84.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('contacts');
      console.log(res);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContact',
  async (body, thunkAPI) => {
    const contacts = thunkAPI.getState().contacts.contacts;
    const isInContacts = contacts.find(contact => contact.name === body.name);
    if (isInContacts) {
      toast.error(`Contact ${isInContacts} is already in Phonebook`);
      return thunkAPI.rejectWithValue('Contact is already in Phonebook');
    }
    try {
      const { data } = await axios.post('contacts', body);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
