import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {
    login: {
      accessToken: null,
      userId: null,
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
export const createCookie = (value) => {
  const expiration = 2 * 60 * 60
  document.cookie = `accessToken=${value}; max-age=${expiration}; path=/`
  console.log(`this is the expiration ${expiration} in seconds`)
}

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
        createCookie(json.accessToken)
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