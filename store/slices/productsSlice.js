import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: [
        // {barData: "4823077630484", fotoData: "file:///data/user/0/com.barcodereader/cache/Camera/61d1b993-d114-427d-a625-09006323162a.jpg", nameProduct: "Weew", priceProduct: "222"},
        // {barData: "4823077630484", fotoData: "file:///data/user/0/com.barcodereader/cache/Camera/e5ec633a-b624-4d04-90a2-c64fc9d232d4.jpg", nameProduct: "Ghgfg", priceProduct: "22"},
    ],
    reducers: {
        addprod: (state, {payload}) => {
           state = state.push(payload)
        }
    }

});

export const { addprod } = productsSlice.actions
export default productsSlice.reducer