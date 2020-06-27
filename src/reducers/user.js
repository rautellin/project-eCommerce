import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {
    login: {
      accessToken: '789b986ee85c394d5721ad2e1d4973f24a82eae5697cbcb0e78215847b29d0ea457078f8750d5af2107aaecd7c48dc009967349e89420e0c63fcfd75612b330098165e205a7604ac25f3feff9cd05ac9c563174d6fd9a84dec9b5ca3b63093e8373ea1a481ce3dcbb723acd4d3a52fdeaac811a3c93f6c8d55cc462a71547ec7',
      userId: '5ef28e650dfc67002af70da8',
      name: null,
      surname: null,
      email: null,
      errorMessage: null
    }
  },
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      console.log(`Access Token: ${accessToken}`)
      state.login.accessToken = accessToken
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      console.log(`User Id: ${userId}`)
      state.login.userId = userId
    },
    setUser: (state, action) => {
      const { name, surname, email } = action.payload
      console.log(`User: ${name} ${surname} with email ${email}`)
      state.login.name = name
      state.login.surname = surname
      state.login.email = email
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload
      console.log(`Error Message: ${errorMessage}`)
      state.login.errorMessage = errorMessage
    }
  }
})

// Thunks
export const login = (email, password) => {
  return async (dispatch) => {
    await fetch('http://rautellin-final-project-api.herokuapp.com/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((json) => {
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.actions.setUserId({ userId: json.userId }))
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }))
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(user.actions.setAccessToken({ accessToken: null }))
    dispatch(user.actions.setUserId({ userId: 0 }))
    dispatch(user.actions.setUser({ name: null, surname: null, email: null }))
  }
}