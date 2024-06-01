import { createSlice } from '@reduxjs/toolkit';

const savedCount = localStorage.getItem('count');
const count = savedCount !== null ? JSON.parse(savedCount) : 0;

const initialState = {
  count: count,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count += 1
    },
    decrementCount: (state) => {
      state.count -= 1
    },
    resetCount: (state) => {
        state.count = 0
    },
  },
})

export const { incrementCount, decrementCount, resetCount } = counterSlice.actions

export default counterSlice.reducer

