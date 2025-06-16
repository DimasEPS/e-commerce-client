import API from "@/utils/axiosConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  products: [],
};

export const addNewProduct = createAsyncThunk(
  "/products/addNewProduct",
  async (formData) => {
    const response = await API.post("/admin/products/add", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }
);

export const getAllProducts = createAsyncThunk(
  "/products/getAllProducts",
  async () => {
    const response = await API.get("/admin/products/get");
    return response.data;
  }
);

export const editProduct = createAsyncThunk(
  "/products/editProduct",
  async (formData, productId) => {
    const response = await API.put(
      `/admin/products/edit/${productId}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "/products/deleteProduct",
  async (productId) => {
    const response = await API.delete(`/admin/products/delete/${productId}`);
    return response.data;
  }
);

const AdminProductSlice = createSlice({
  name: "adminProductsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        // console.log(action.payload);

        state.isLoading = false;
        state.products = action.payload.data;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.isLoading = false;
        state.products = [];
      });
  },
});

export default AdminProductSlice.reducer;
