import { createSlice } from '@reduxjs/toolkit'

export const product = createSlice({
  name: 'product',
  initialState: {
    products: [],
    categories: [
      { value: 'Bottoms & Leggings', label: 'Bottoms & Leggings' },
      { value: 'Shorts', label: 'Shorts' },
      { value: 'Crop Top', label: 'Crop Top' },
      { value: 'T-Shirt & Top', label: 'T-Shirt & Top' },
      { value: 'Hoodie', label: 'Hoodie' },
      { value: 'Jacket', label: 'Jacket' },
      { value: 'Vest', label: 'Vest' },
      { value: 'Sports Bra', label: 'Sports Bra' },
      { value: 'Swimwear', label: 'Swimwear' },
      { value: 'Socks', label: 'Socks' },
      { value: 'Headwear', label: 'Headwear' },
      { value: 'Bag', label: 'Bag' },
      { value: 'Bottle', label: 'Bottle' },
      { value: 'Equipment', label: 'Equipment' }
    ],
    colors: [
      { value: 'Beige', label: 'Beige' },
      { value: 'Black', label: 'Black' },
      { value: 'Blue', label: 'Blue' },
      { value: 'Brown', label: 'Brown' },
      { value: 'Grey', label: 'Grey' },
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
    availableSizes: [
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
  reducers: {}
})

