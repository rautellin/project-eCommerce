import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const { title, price, color, imageUrl, id, selectedSize } = action.payload
      state.items.push({ title, price, color, imageUrl, id, selectedSize, quantity: 1 })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    }
  }
})
