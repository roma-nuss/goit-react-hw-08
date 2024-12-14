import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
        state.error = null;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter((contact) => contact.id !== payload);
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default contactsSlice.reducer;
