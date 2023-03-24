import { createSlice } from '@reduxjs/toolkit';


export const sortSlice = createSlice({
    name: 'sort',
    initialState: 'priceAsc',
    reducers: {
        sort(state, action) {
           return state = action.payload
        }
    }
})



export const { sort } = sortSlice.actions;