import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    cartItems: 0
  },
  reducers: {
    updateCartItems: (state, action) => {
      state.cartItems = action.payload
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)
      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    }
  }
})
