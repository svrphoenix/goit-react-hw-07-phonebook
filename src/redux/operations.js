import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://646f943e09ff19b1208781fe.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (err) {
      toast.error(
        `Error happend on the server while loading contacts: (${err.message})`
      );
      return rejectWithValue(err.code);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (err) {
      toast.error(
        `Error happend on the server while adding contacts: (${err.message})`
      );
      return rejectWithValue(err.code);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (err) {
      toast.error(
        `Error happend on the server while deleting contacts: (${err.message})`
      );
      return rejectWithValue(err.code);
    }
  }
);
