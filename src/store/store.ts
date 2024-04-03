import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

//// ADDING TYPE SUPPORT
// const name = "James";
// type N = typeof name
export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
