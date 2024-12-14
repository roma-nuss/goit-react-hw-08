import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

const fetchWithAuth = async (method, url, data = null, token) => {
  setAuthHeader(token);

  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) {
      return rejectWithValue("Token not found. Please log in again.");
    }

    try {
      const data = await fetchWithAuth("get", "/contacts", null, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) {
      return rejectWithValue("Token not found. Please log in again.");
    }

    try {
      const data = await fetchWithAuth("post", "/contacts", contact, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) {
      return rejectWithValue("Token not found. Please log in again.");
    }

    try {
      await fetchWithAuth("delete", `/contacts/${contactId}`, null, token);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
