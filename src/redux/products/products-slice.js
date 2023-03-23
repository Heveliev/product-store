
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, addProduct, deleteProduct, editProduct} from './products-thunk';
import { isAnyOf } from '@reduxjs/toolkit';



const actions = [fetchAllProducts, addProduct, deleteProduct,editProduct];

const handleFetchProducts = (state, action) => {
  state.items = action.payload;
};

const handleAddProducts= (state, action) => {
  state.items.push(action.payload);
};

const handleDeleteProducts = (state, action) => {
  const idx = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(idx, 1);
};
const handleEditProducts = (state, action) => {
   const { id, updatedProduct } = action.payload;
  const index = state.items.findIndex(item => item.id === id);
  if (index !== -1) {
    state.items[index] = { ...state.items[index], ...updatedProduct };
  }
};

export const productsSlice = createSlice({
    name: 'products',
    initialState:{
    items: [],
    isLoading: false,
    error: null
  },

 extraReducers: builder =>
    builder
      .addCase(fetchAllProducts.fulfilled, handleFetchProducts)
      .addCase(addProduct.fulfilled, handleAddProducts)
     .addCase(deleteProduct.fulfilled, handleDeleteProducts)
     .addCase(editProduct.fulfilled, handleEditProducts)
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),

})