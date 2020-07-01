import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, InputContainer, Label, Required, Checkbox, CheckboxLabel } from '../lib/Form'
import { Header } from '../lib/Text'
import { SubmitButton } from '../lib/Buttons'

export const Container = styled.section`
width: 100%;
max-width: 1200px;
min-height: 460px;

@media screen and (max-width: 500px){
  padding: 10px;
}
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
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              type="password" />
            <Label filled={filledPassword} for="password">Password</Label>
          </InputContainer>
          <Span id="password"><Required filled={filledPassword}>Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers.</Required></Span>


          <CheckboxContainer>
            <Checkbox type="checkbox" id="newsletter" />
            <CheckboxLabel color="black" htmlFor="newsletter">I wish to receive Nara news on my e-mail</CheckboxLabel>
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox type="checkbox" id="terms" />
            <CheckboxLabel color="black" htmlFor="terms">I have read and understand the <a style={{ textDecoration: 'underline' }} href="/">Privacy and Cookies Policy</a></CheckboxLabel>
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
        <SubmitButton type="submit" width="45%">Create account</SubmitButton>
      </Form>
    </Container>
  )
}