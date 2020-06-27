import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const UserPage = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const id = useSelector((store) => store.user.login.userId)
  const [user, setUser] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://rautellin-final-project-api.herokuapp.com/users/${id}`, {
          method: 'GET',
          headers: { Authorization: accessToken, 'Content-Type': 'application/json' }
        })
        const json = await res.json()
        setUser(json)
      } catch (err) {
        setError(true)
      }
    }
    fetchProduct()
  }, [setUser, accessToken, id])

  console.log(user)
  console.log(error)

  if (accessToken) {
    return (
      <div>
        Welcome {user.name}!
      </div>
    )
  } else {
    return <Redirect to="/login" />
  }
}