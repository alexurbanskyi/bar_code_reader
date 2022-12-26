import {createSlice} from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsList: [],
  },
  reducers: {
    addproduct: (state, {payload}) => {
      state.productsList.push(payload);
    },
    addProductsFromAsync: (state, {payload}) => {
      state.productsList = [...payload];
    },
  },
});

export const {addproduct, addProductsFromAsync} = productsSlice.actions;
export default productsSlice.reducer;
