import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../contacts/operations";
import { logout } from "../auth/operations";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      //FETCH_ALL
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = action.payload;
      })
      //ADD_CONTACT
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = [...state.items, action.payload];
      })
      //DELETE_CONTACT
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      //LOGOUT
      .addCase(logout.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
