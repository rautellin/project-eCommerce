import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button, Input, InputContainer, Label, Required } from '../lib/Account'
import { Checkbox, CheckboxLabel } from '../lib/Input'
import { Header, Paragraph, FooterLink } from '../lib/Text'

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
background: yellow;
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

  const enabled = email.length > 0 && password.length > 0
  const filledEmail = email.length > 0
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
              onFocus={requiredEmail}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email" />
            <Label filled={filledEmail} for="email">E-mail</Label>
          </InputContainer>
          <Span id="email"><Required filled={filledEmail}>Required field</Required></Span>

          <CheckboxContainer>
            <Checkbox type="checkbox" id="newsletter" />
            <CheckboxLabel color="black" htmlFor="newsletter">I wish to receive Zara news on my e-mail</CheckboxLabel>
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox type="checkbox" id="terms" />
            <CheckboxLabel color="black" htmlFor="terms">I have read and understand the <FooterLink href="/">Privacy and Cookies Policy</FooterLink></CheckboxLabel>
          </CheckboxContainer>
        </Section>

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
              onFocus={requiredEmail}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email" />
            <Label filled={filledEmail} for="email">E-mail</Label>
          </InputContainer>
          <Span id="email"><Required filled={filledEmail}>Required field</Required></Span>
        </Section>
        <Button type="submit" disabled={!enabled} width="45%">Log in</Button>
      </Form>
    </Container>
  )
}