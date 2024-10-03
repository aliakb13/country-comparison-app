import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "../features/country/countrySlice";
import newsSlice from "../features/news/newsSlice";

export const store = configureStore({
  reducer: {
    country: countrySlice,
    news: newsSlice,
  },
});
