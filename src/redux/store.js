import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const rootReducer = (initialState, action) => {
  return initialState;
};

export const store = configureStore({
  reducer: rootReducer,
});
