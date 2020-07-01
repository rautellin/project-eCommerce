import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../reducers/user'
import { Header, Paragraph } from '../lib/Text'
import { SubmitButton } from '../lib/Buttons'
import { CenterContainer } from '../lib/Containers'

export const UserPage = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({})
  const [error, setError] = useState(false)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const id = useSelector((store) => store.user.login.userId)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://rautellin-final-project-api.herokuapp.com/user/${id}`, {
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
  }, [id, accessToken])

  const handleLogOut = (event) => {
    event.preventDefault()
    dispatch(logout())
  }

  if (accessToken) {
    if (Object.keys(user).length === 0) {
      return (
        <Header>Please wait</Header>
      )
    } else {
      return (
        <CenterContainer justifyContent="center">
          <Header> Welcome, {user.name} {user.surname}!</Header>
          <Paragraph> Here you will find all your favorite items</Paragraph>
          <SubmitButton type="submit" onClick={handleLogOut} position="block" width="50%">Log Out</SubmitButton>
        </CenterContainer>
      )
    }
  } else {
    return <Redirect to="/login" />
  }
}