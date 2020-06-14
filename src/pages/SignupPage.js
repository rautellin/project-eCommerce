import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input, InputContainer, Label, Required, Checkbox, CheckboxLabel } from '../lib/Form'
import { Header, FooterLink } from '../lib/Text'

export const Container = styled.section`
width: 100%;
max-width: 1200px;
min-height: 460px;
`

export const Form = styled.form`
padding: 40px 0;
position: relative;
display: flex;
justify-content: space-between;
`

export const Section = styled.section`
width: 45%;
padding: 40px 0;
position: relative;
`

export const Span = styled.span`
opacity: 0;

.required {
  opacity: 1;
}
`

export const CheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
`

export const SignupPage = () => {
  // NAME VALIDATION
  const [name, setName] = useState('')
  const requiredName = () => {
    const d = document.getElementById('name')
    d.className += 'required'
  }
  const filledName = name.length > 0

  // SURNAME VALIDATION
  const [surname, setSurname] = useState('')
  const requiredSurname = () => {
    const d = document.getElementById('surname')
    d.className += 'required'
  }
  const filledSurname = surname.length > 0

  // EMAIL VALIDATION
  const [email, setEmail] = useState('')
  const requiredEmail = () => {
    const d = document.getElementById('email')
    d.className += 'required'
  }
  const filledEmail = email.length > 0

  // PASSWORD VALIDATION
  const [password, setPassword] = useState('')
  const requiredPassword = () => {
    const d = document.getElementById('password')
    d.className += 'required'
  }
  const filledPassword = password.length > 0

  // PASSWORD CONFIRM
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const requiredConfirmPassword = () => {
    const d = document.getElementById('confirmedPassword')
    d.className += 'required'
  }
  const filledConfirmedPassword = confirmedPassword.length > 0

  const enabled = email.length > 0 && name.length > 0

  return (
    <Container>
      <Header>Write your personal details</Header>
      <Form action="">
        <Section>

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
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              type="password" />
            <Label filled={filledPassword} for="password">Password</Label>
          </InputContainer>
          <Span id="password"><Required filled={filledPassword}>Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers.</Required></Span>

          <InputContainer>
            <Input
              onFocus={requiredConfirmPassword}
              value={confirmedPassword}
              onChange={(event) => setConfirmedPassword(event.target.value)}
              required
              type="password" />
            <Label filled={filledConfirmedPassword} for="password">Confirm password</Label>
          </InputContainer>
          <Span id="confirmedPassword"><Required filled={filledConfirmedPassword}>Passwords are not matching.</Required></Span>


          <CheckboxContainer>
            <Checkbox type="checkbox" id="newsletter" />
            <CheckboxLabel color="black" htmlFor="newsletter">I wish to receive Nara news on my e-mail</CheckboxLabel>
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox type="checkbox" id="terms" />
            <CheckboxLabel color="black" htmlFor="terms">I have read and understand the <FooterLink href="/">Privacy and Cookies Policy</FooterLink></CheckboxLabel>
          </CheckboxContainer>
        </Section>

        <Section>

          <InputContainer>
            <Input
              onFocus={requiredName}
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              type="text" />
            <Label filled={filledName} for="name">Name</Label>
          </InputContainer>
          <Span id="name"><Required filled={filledName}>Required field</Required></Span>

          <InputContainer>
            <Input
              onFocus={requiredSurname}
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
              required
              type="text" />
            <Label filled={filledSurname} for="surname">Surname</Label>
          </InputContainer>
          <Span id="surname"><Required filled={filledSurname}>Required field</Required></Span>

        </Section>
        <Button type="submit" disabled={!enabled} width="45%">Log in</Button>
      </Form>
    </Container>
  )
}