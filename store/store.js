import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice'
import clientListSlice from './slices/clientListSlice'

export const store = configureStore({
    reducer: {
        productsSlice,
        clientListSlice
    }
})