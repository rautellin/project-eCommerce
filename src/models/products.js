import mongoose from 'mongoose'

const Products = mongoose.model('Products', {
  title: {
    type: String
  },
  price: {
    type: Number
  },
  color: {
    type: String
  },
  description: {
    type: String
  },
  composition: {
    type: String
  },
  sizes: {
    type: String
  },
  picture: {
    type: String
  },
  new: {
    type: Boolean
  },
  limited: {
    type: Boolean
  }
})

export default Products
