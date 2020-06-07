import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Header, Paragraph, Required } from '../lib/Text'
import { FormButton } from '../lib/Buttons'
import { LoginInput, LoginLabel } from '../lib/Input'

export const Input = () => {

  const Input = styled.div`
    position: relative;
    margin-top:30px;
  `

  return (
    <>
      <Input>
        <LoginInput type="email" name="email" required />
        <LoginLabel for="email">E-mail</LoginLabel>
      </Input>
      <Required>Required field</Required>
      <Input>
        <LoginInput type="password" name="password" required />
        <LoginLabel for="password">Password</LoginLabel>
      </Input>
      <Required>Required field</Required>
    </>
  )
}

export const Form = () => {


  return (
 
  )
}