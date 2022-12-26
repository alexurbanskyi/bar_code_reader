import {createSlice} from '@reduxjs/toolkit';

export const clientListSlice = createSlice({
  name: 'clientList',
  initialState: {
    clienList: [],
  },
  reducers: {
    addClientProduct: (state, {payload}) => {
      state.clienList.push(payload);
    },
  },
});
export const {addClientProduct} = clientListSlice.actions;
export default clientListSlice.reducer;
