import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Redirect } from 'react-router-dom'

export const UserPage = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState(false)
  const [cookies, removeCookie] = useCookies(['accessToken'])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('https://rautellin-final-project-api.herokuapp.com/user', {
          method: 'GET',
          headers: { Authorization: cookies.accessToken, 'Content-Type': 'application/json' }
        })
        const json = await res.json()
        setUser(json)
      } catch (err) {
        setError(true)
      }
    }
    if (!document.cookie === '') {
      fetchUser()
    }
  }, [setUser, cookies.accessToken])

  console.log(user)
  console.log(error)

  const handleLogOut = (event) => {
    event.preventDefault()
    removeCookie('accessToken')
  }

  if (cookies.accessToken) {
    if (Object.keys(user).length === 0) {
      return (
        <h1>Please wait</h1>
      )
    } else {
      return (
        <div>
          Welcome {user.name}!
          <button type="submit" onClick={handleLogOut}>Log Out</button>
        </div>
      )
    }
  } else {
    return <Redirect to="/login" />
  }
}