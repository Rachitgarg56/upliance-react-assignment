import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    userID: '',
}

export const userDataSlice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
    setName: (state, action) => {
        state.name = action.payload;
    },
    setEmail: (state, action) => {
        state.email = action.payload;
    },
    setPhone: (state, action) => {
        state.phone = action.payload;
    },
    setAddress: (state, action) => {
        state.address = action.payload;
    },
    setUserID: (state, action) => {
        state.userID = action.payload;
    },
  },
})

export const { setName, setEmail, setPhone, setAddress, setUserID } = userDataSlice.actions

export default userDataSlice.reducer

