import React from 'react'
import { useCookies } from 'react-cookie'

export const HelpPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['name'])

  const newName = 'Nat'
  console.log(Object.keys(cookies).length)

  return (
    <>
      <h1>Hello CodeSandbox</h1>
      {cookies.name && <h1>Hello {cookies.name}!</h1>}
      <button onClick={() => { setCookie('name', newName, { path: '/', maxAge: 20 }) }} type="submit">Store Cookie</button>
      <button onClick={() => { removeCookie('name') }} type="submit">Remove Cookie</button>
    </>
  )
}