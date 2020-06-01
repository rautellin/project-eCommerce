import { createSlice } from '@reduxjs/toolkit'

export const nav = createSlice({
  name: 'nav',
  initialState: {
    cart: 0
  },
  reducers: {
    subscribe: () => {
      console.log('congrats')
    }
  }
})