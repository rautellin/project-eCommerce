import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

export const getCookie = () => {
  const accessToken = document.cookie
    .split('; ')
    .find((item) => item.startsWith('accessToken'))
    .split('=')[1]
  console.log(`this is the accessToken from the cookie ${accessToken}`)
  return accessToken
}

export const UserPage = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState(false)
  const accessToken = getCookie()
  console.log(accessToken)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('https://rautellin-final-project-api.herokuapp.com/user', {
          method: 'GET',
          headers: { Authorization: accessToken, 'Content-Type': 'application/json' }
        })
        const json = await res.json()
        setUser(json)
      } catch (err) {
        setError(true)
      }
    }
    fetchUser()
  }, [setUser, accessToken])

  console.log(user)
  console.log(error)

  if (accessToken) {
    if (Object.keys(user).length === 0) {
      return (
        <h1>Please wait</h1>
      )
    } else {
      return (
        <div>
          Welcome {user.name}!
        </div>
      )
    }
  } else {
    return <Redirect to="/login" />
  }
}