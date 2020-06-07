import { createSlice } from '@reduxjs/toolkit'

export const input = createSlice({
  name: 'input',
  initialState: {
    email: false,
    password: false
  },
  reducers: {
    leftArrow: () => {
      console.log('congrats')
    },
    rightArrow: () => {
      console.log('congrats')
    }
  }
})

