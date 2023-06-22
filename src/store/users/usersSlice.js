import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users : [],
  isloading: false,
  error: undefined,
}

export const fetchUser = createAsyncThunk('users/fetchUser', () => {
  const response = axios.get('https://jsonplaceholder.typicode.com/users');
  console.log(response);
})

const useSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isloading = true;
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.users = action.payload
      state.isloading = false;
      state.error = undefined

    })

    builder.addCase(fetchUser.rejected, (state) => {
      state.isloading = false;
      state.users = [];
      state.error = 'ERROR'
    })
  }
})


export default useSlice.reducer;