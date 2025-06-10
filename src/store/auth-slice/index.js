import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import API from "@/utils/axiosConfig";

// const BASEURL = import.meta.env.VITE_BASE_API_URL;
// console.log(BASEURL);

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData) => {
    const response = await await API.post("/auth/register", formData);
    return response.data;
  }
);

export const loginUser = createAsyncThunk("/auth/login", async (formData) => {
  const response = await API.post("/auth/login", formData);
  return response.data;
});

export const checkAuth = createAsyncThunk(
  "/auth/checkauth",

  async () => {
    const response = await API.get("auth/check-auth", {
      headers: {
        "Cache-Control":
          "no-cache, no-store, must-revalidate, proxy-revalidate",
      },
    });
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })

      // CHECK AUTH
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
