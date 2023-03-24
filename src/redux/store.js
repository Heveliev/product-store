import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filter-slice';
import { modalSlice } from './modal/modal-slice';
import { productsSlice } from './products/products-slice';
import { sortSlice } from './sort/sort-slice';

export const store = configureStore({
  reducer: {

        products: productsSlice.reducer,
    filter: filterSlice.reducer,
    modal: modalSlice.reducer,
    sort:sortSlice.reducer,
  }})