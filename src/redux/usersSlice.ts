import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    page: 0,
    loading: false,
    error: null,
  },
  reducers: {},
});

export default usersSlice.reducer;