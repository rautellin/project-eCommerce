import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Header, Paragraph, Required } from '../lib/Text'
import { FormButton } from '../lib/Buttons'
import { LoginInput, LoginLabel } from '../lib/Input'

export const LoginPage = () => {
  const Container = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const Section = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    min-height: 460px;
  `

  const Form = styled.form`
    background: yellow;
    width: 45%;
    padding: 40px 0;
    position: relative;
  `

  const Input = styled.div`
    position: relative;
    margin-top:30px;
  `

  return (
    <Container>
      <Section>
        <Form>
          <Header margin="0 0 40px 0">Log in</Header>
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
          <FormButton>Log in</FormButton>
        </Form>
        <Form>
          <Header margin="0 0 40px 0">Register</Header>
          <Paragraph> If you still don&apos;t have a <strong>Nara.com</strong> account, use this option to access the registration form.
          </Paragraph>
          <Paragraph>By giving us your details, purchasing in <strong>Nara.com</strong> will be faster and an enjoyable experience.</Paragraph>
          <NavLink to="signup">
            <FormButton>Create account</FormButton>
          </NavLink>
        </Form>
      </Section>
    </Container>
  )
}