import { createSlice } from '@reduxjs/toolkit'

export const product = createSlice({
  name: 'product',
  initialState: {
    products: [],
    categories: [
      { value: 'Blazer', label: 'Blazer' },
      { value: 'Dress', label: 'Dress' },
      { value: 'Shirt', label: 'Shirt' },
      { value: 'T-shirt', label: 'T-shirt' },
      { value: 'Knitwear', label: 'Knitwear' },
      { value: 'Trousers', label: 'Trousers' },
      { value: 'Jeans', label: 'Jeans' },
      { value: 'Shorts', label: 'Shorts' },
      { value: 'Skirt', label: 'Skirt' },
      { value: 'Jacket', label: 'Jacket' },
      { value: 'Coat', label: 'Coat' },
      { value: 'Shoes', label: 'Shoes' },
      { value: 'Bag', label: 'Bag' },
      { value: 'Swimwear', label: 'Swimwear' },
      { value: 'Accessory', label: 'Accessory' }
    ],
    colors: [
      { value: 'Beige', label: 'Beige' },
      { value: 'Black', label: 'Black' },
      { value: 'Blue', label: 'Blue' },
      { value: 'Brown', label: 'Brown' },
      { value: 'Green', label: 'Green' },
      { value: 'Purple', label: 'Purple' },
      { value: 'Orange', label: 'Orange' },
      { value: 'Pink', label: 'Pink' },
      { value: 'Red', label: 'Red' },
      { value: 'White', label: 'White' },
      { value: 'Silver', label: 'Silver' },
      { value: 'Gold', label: 'Gold' },
      { value: 'Yellow', label: 'Yellow' },
      { value: 'Printed', label: 'Printed' }
    ],
    sizes: [
      { value: 'XS', label: 'XS' },
      { value: 'S', label: 'S' },
      { value: 'M', label: 'M' },
      { value: 'L', label: 'L' },
      { value: 'XL', label: 'XL' },
      { value: 'XXL', label: 'XXL' },
      { value: '35', label: '35' },
      { value: '36', label: '36' },
      { value: '37', label: '37' },
      { value: '38', label: '38' },
      { value: '39', label: '39' },
      { value: '40', label: '40' },
      { value: '41', label: '41' },
      { value: '42', label: '42' },
      { value: 'One size', label: 'One size' }
    ]
  },
  reducers: {
    addProduct: (state, action) => {
      const {
        title,
        price,
        color,
        category,
        description,
        availableSizes,
        imageUrl
      } = action.payload
      state.products.push({
        title,
        price,
        color,
        category,
        description,
        availableSizes,
        imageUrl
      })
    },
    setProducts: (state, action) => {
      state.products = action.payload.products
    }
  }
})

export const fetchProducts = () => {
  const API_URL = 'http://rautellin-final-project-api.herokuapp.com/products'
  const ERR_CANNOT_FETCH = 'Cannot fetch products'

  return (dispatch) => {
    fetch(API_URL)
      .then((res) => {
        try {
          return res.json()
        } catch (err) {
          res.status(400).json({ message: ERR_CANNOT_FETCH, errors: err.errors })
        }
      })
      .then((json) => {
        dispatch(
          product.actions.setProducts({
            products: json
          })
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }
}