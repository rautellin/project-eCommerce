import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button, Input, InputContainer, Label, Required } from '../lib/Account'
import { Header, Paragraph } from '../lib/Text'

export const Container = styled.main`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const Section = styled.section`
display: flex;
justify-content: space-between;
width: 100%;
max-width: 1200px;
min-height: 460px;
`

export const Form = styled.form`
background: yellow;
width: 45%;
padding: 40px 0;
position: relative;
`

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log('submit')
  }

  const enabled = email.length > 0 && password.length > 0
  const filledEmail = email.length > 0
  const filledPassword = password.length > 0

  return (
    <Container>
      <Section>

        <Form onSubmit={handleSubmit}>
          <Header margin="0 0 40px 0">Log in</Header>
          <InputContainer>
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email" />
            <Label filled={filledEmail} for="email">E-mail</Label>
          </InputContainer>
          <Required>Required field</Required>
          <InputContainer>
            <Input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password" />
            <Label filled={filledPassword} for="email">Password</Label>
          </InputContainer>
          <Required>Required field</Required>
          <Button type="submit" disabled={!enabled}>Log in</Button>
        </Form>

        <Form>
          <Header margin="0 0 40px 0">Register</Header>
          <Paragraph> If you still don&apos;t have a <strong>Nara.com</strong> account, use this option to access the registration form.
          </Paragraph>
          <Paragraph>By giving us your details, purchasing in <strong>Nara.com</strong> will be faster and an enjoyable experience.</Paragraph>
          <NavLink to="signup">
            <Button>Create account</Button>
          </NavLink>
        </Form>

      </Section>
    </Container>
  )
}