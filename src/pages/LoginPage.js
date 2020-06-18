import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Input, InputContainer, Label, Required } from '../lib/Form'
import { SubmitButton } from '../lib/Buttons'
import { Header, Paragraph } from '../lib/Text'

export const Section = styled.section`
display: flex;
justify-content: space-between;
width: 100%;
max-width: 1200px;
min-height: 460px;
`

export const Form = styled.form`
width: 45%;
padding: 40px 0;
position: relative;

:valid button {
      background: black;
      cursor: pointer;

      :hover {
        background: rgb(51, 51, 51);
      }
    }
`

export const Span = styled.span`
opacity: 0;

.required {
  opacity: 1;
}
`

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log('submit')
  }

  const requiredEmail = () => {
    const d = document.getElementById('email')
    d.className += 'required'
  }

  const requiredPassword = () => {
    const d = document.getElementById('password')
    d.className += 'required'
  }

  const filledEmail = email.length > 0
  const filledPassword = password.length > 0

  return (
    <Section>

      <Form onSubmit={handleSubmit}>
        <Header margin="0 0 40px 0">Log in</Header>
        <InputContainer>
          <Input
            onFocus={requiredEmail}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email" />
          <Label filled={filledEmail} for="email">E-mail</Label>
        </InputContainer>
        <Span id="email"><Required filled={filledEmail}>Required field</Required></Span>
        <InputContainer>
          <Input
            onFocus={requiredPassword}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password" />
          <Label filled={filledPassword} for="email">Password</Label>
        </InputContainer>
        <Span id="password"><Required filled={filledPassword}>Required field</Required></Span>
        <SubmitButton type="submit">Log in</SubmitButton>
      </Form>

      <Form>
        <Header margin="0 0 40px 0">Register</Header>
        <Paragraph> If you still don&apos;t have a <strong>Nara.com</strong> account, use this option to access the registration form.</Paragraph>
        <Paragraph>By giving us your details, purchasing in <strong>Nara.com</strong> will be faster and an enjoyable experience.</Paragraph>
        <NavLink to="signup">
          <SubmitButton>Create account</SubmitButton>
        </NavLink>
      </Form>

    </Section>
  )
}