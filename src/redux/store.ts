import { configureStore } from '@reduxjs/toolkit'
import contactSlice from './features/contactSlice/contactSlice'

const store = configureStore({
  reducer: {
    contact: contactSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;