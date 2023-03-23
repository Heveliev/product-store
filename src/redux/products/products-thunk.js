import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com';


export const fetchAllProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/products')
      return data.products
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

  }
);



export const addProduct = createAsyncThunk(
  'products/addProduct',
  async ({ name, number }, thunkAPI) => {
    try {
    //   const {data} = await axios.post('/products', {name,number});
      // return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/products/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editProduct = createAsyncThunk('products/editProduct',
  async ({ id, title}, thunkAPI) => {
    try {
      const res = await axios.patch(`/products/${id}`,{title});
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
