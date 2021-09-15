import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProductStoreState } from '../../../Models/Interfaces';

// Async functions
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (dispatch) => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products?limit=20');
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState: IProductStoreState = {
  allProducts: [],
  mensProducts: [],
  womensProducts: [],
  techProducts: [],
  jeweleryProducts: [],
  loadingData: false,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loadingData = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loadingData = false;
        state.allProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loadingData = true;
        console.log('Failed');
      });
  },
});

export default productSlice.reducer;
