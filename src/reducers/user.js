import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {
    login: {
      accessToken: null,
      userId: 0,
      errorMessage: null,
      isAdmin: false
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
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload
      console.log(`Error Message: ${errorMessage}`)
      state.login.errorMessage = errorMessage
    },
    authenticateAdmin: (state, action) => {
      const { isAdmin } = action.payload
      console.log(`Error Message: ${isAdmin}`)
      state.login.isAdmin = isAdmin
    }
  }
})

// Thunks

export const login = (email, password) => {
  return async (dispatch) => {
    await fetch('https://rautellin-final-project-api.herokuapp.com/login', {
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
    dispatch(user.actions.authenticateAdmin({ isAdmin: false }))
  }
}