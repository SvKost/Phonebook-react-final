import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestGetAllContacts,
  requestAddNewContact,
  requestDeleteContact,
} from "../services/apiHerokuapp";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await requestGetAllContacts();

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await requestAddNewContact(newContact);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await requestDeleteContact(contactId);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// export const updateContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, contactData, thunkAPI) => {
//     try {
//       const response = await requestUpdateContact(contactId, contactData);
//       return response;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );
