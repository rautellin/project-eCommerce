import { createSlice } from '@reduxjs/toolkit'

export const design = createSlice({
  name: 'design',
  initialState: {
    slides: [
      { image: 'url(./images/slide1.jpg)', header: 'New in', text: "Explore this week's latest womenswear pieces of the season created for you", color: 'black' },
      { image: 'url(./images/slide2.jpg)', header: 'Collection', text: 'Discover this week the latest pieces from our latest collection. Selected pieces with new pictures.', color: 'black', video: 'https://player.vimeo.com/external/353237048.hd.mp4?s=f782eb50065299b07e6b0f798811af74829d5524&amp;profile_id=172&amp;oauth2_token_id=57447761' },
      { image: 'url(./images/slide3.jpg)', header: 'New in', text: 'Explore the new collection. Selected pieces with new pictures.', color: 'white' }
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

