import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  user: [],
  error: null,
};

const getAsyncUser = createAsyncThunk(
  "user/getAsyncUsers",
  async (_, { rejectWithValue }) => {
    try {
      //! get users
      const response = await axios.get("https://www.freetestapi.com/api/v1/users");
      return response.data;

    } catch (error) {
      //! error message
      return rejectWithValue(error.response.data || "so,thing went wrong");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAsyncUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload;
      })
      .addCase(getAsyncUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      });
  },
});

export { getAsyncUser };
export default userSlice.reducer;
