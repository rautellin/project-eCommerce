import { createSlice } from '@reduxjs/toolkit'

export const homePage = createSlice({
  name: 'homePage',
  initialState: {
    slides: [
      { image: './images/page2.jpg', header: 'New in', text: "Explore this week's latest womenswear pieces of the season created for you" },
      { image: './images/page2.jpg', header: 'Collection', text: 'Discover this week the latest pieces from our latest collection. Selected pieces with new pictures.' },
      { image: './images/page2.jpg', header: 'New in', text: 'Explore the new collection of Shoes &amp; Bags. Selected pieces with new pictures.' }
    ]
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

