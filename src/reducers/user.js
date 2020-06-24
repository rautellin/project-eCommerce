import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {
    login: {
      accessToken: null,
      userId: 0,
      secretMessage: null,
      errorMessage: null
    }
  },
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      console.log(`Access Token: ${accessToken}`);
      state.login.accessToken = accessToken;
    },
    setUserId: (state, action) => {
      const { userId } = action.payload;
      console.log(`User Id: ${userId}`);
      state.login.userId = userId;
    },
    setSecretMessage: (state, action) => {
      const { secretMessage } = action.payload;
      console.log(`Secret Message: ${secretMessage}`);
      state.login.secretMessage = secretMessage;
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      console.log(`Error Message: ${errorMessage}`);
      state.login.errorMessage = errorMessage;
    }
  }
})

// Thunks
export const login = (email, password) => {
  return (dispatch) => {
    fetch('http://rautellin-final-project-api.herokuapp.com/sessions', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (res.ok /* if 200, 201, 204 */) {
          return res.json()
        }
      })
      .then((json) => {
        // Save the login info
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken
          })
        )
        dispatch(user.actions.setUserId({ userId: json.userId }))
      })
      .catch((err) => {
        dispatch(user.actions.logout())
        dispatch(user.actions.setErrorMessage({ errorMessage: err }))
      })
  }
}

export const getSecretMessage = () => {
  return (dispatch, getState) => {
    const { accessToken } = getState().user.login
    const { userId } = getState().user.login
    // Include userId in the path
    fetch(`http://rautellin-final-project-api.herokuapp.com/users/${userId}`, {
      method: 'GET',
      // Include the accessToken to get the protected endpoint
      headers: { Authorization: accessToken }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      // SUCCESS: Do something with the information we got back
      .then((json) => {
        dispatch(
          user.actions.setSecretMessage({ secretMessage: JSON.stringify(json) })
        );
      })
      .catch((err) => {
        // const errorMessage = err;
        // dispatch(user.actions.setErrorMessage({ errorMessage }));

        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      }); // 401
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(user.actions.setSecretMessage({ secretMessage: null }));
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setUserId({ userId: 0 }));
  };
};