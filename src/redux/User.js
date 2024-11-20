import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../db";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: Users },
  reducers: {
    addUser: (state, action) => {},
  },
});
