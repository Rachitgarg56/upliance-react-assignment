import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/CounterSlice'
import userDataReducer from './slices/UserDataSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userdata: userDataReducer,
  },
})