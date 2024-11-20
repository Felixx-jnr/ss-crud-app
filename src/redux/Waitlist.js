import { createSlice } from "@reduxjs/toolkit";
import { Waitlist } from "../db";

export const waitlistSlice = createSlice({
  name: "waitlist",
  initialState: { value: Waitlist },
  reducers: {
    addToWaitlist: (state, action) => {},
  },
});

export default waitlistSlice.reducer;
