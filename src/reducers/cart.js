import { createSlice } from '@reduxjs/toolkit'

const items = [
  { title: 'hej', price: 400, _id: 1, quantity: 1 },
  { title: 'eoo', price: 400, _id: 11, quantity: 2 },
  { title: 'ekekek', price: 400, _id: 12, quantity: 1 }
]

export const cart = createSlice({
  name: 'cart',
  initialState: items,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 })
      console.log(action.payload)
      const existingProduct = state.items.find((item) => item._id === action.payload._id)
      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
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
