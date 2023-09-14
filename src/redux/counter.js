import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    interest: (state) => {
      let interest = (state.count / 100) * 5;
      state.count += interest;
    },
    charges: (state) => {
      let charges = (state.count / 100) * 15;
      state.count -= charges;
    },
    deposit: (state, action) => {
      state.count += action.payload;
    },
    withdraw: (state) => {
      state.count -= state.count;
    }
  }
});

export const { interest, charges, deposit, withdraw } = counterSlice.actions;
export default counterSlice.reducer;
