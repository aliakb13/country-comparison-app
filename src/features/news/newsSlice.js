import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [],
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.errorMessage = action.payload;
    });
  },
});

export default newsSlice.reducer;

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (url, { rejectWithValue }) => {
    try {
      const res = await axios(url);
      // console.log(res.data.response.docs);
      return res.data.response.docs;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
