import { createSlice } from "@reduxjs/toolkit";
import { Waitlist } from "../db";

export const waitlistSlice = createSlice({
  name: "waitlist",
  initialState: { value: Waitlist },
  reducers: {
    //add to waitlist
    addToWaitlist: (state, action) => {
      state.value.unshift(action.payload);
    },

    //delete a waitlist
    deleteFromWaitlist: (state, action) => {
      state.value = state.value.filter(
        (waitlist) => waitlist.id !== action.payload.id
      );
    },

    //update to waitlist
    updateMailOnWaitlist: (state, action) => {
      state.value.map((waitlist) => {
        if (waitlist.id === action.payload.id) {
          waitlist.mail = action.payload.mail;
        }
      });
    },
  },
});

export const { addToWaitlist, deleteFromWaitlist, updateMailOnWaitlist } =
  waitlistSlice.actions;
export default waitlistSlice.reducer;
