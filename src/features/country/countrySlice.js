import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const countrySlice = createSlice({
  name: "country",
  initialState: {
    data: [],
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountry.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(fetchCountry.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.errorMessage = action.payload;
    });
  },
});

export default countrySlice.reducer;

export const fetchCountry = createAsyncThunk(
  "country/fetchCountry",
  async (url, { rejectWithValue }) => {
    try {
      const res = await axios(url);
      const sort = res.data.sort((a, b) => b.population - a.population);
      return sort;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
