import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: 0
  },
  reducers: {
    addItem: () => {
      console.log('congrats')
    }
  }
})