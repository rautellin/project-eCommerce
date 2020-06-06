import React from 'react'
import styled from 'styled-components'
import { Header } from '../lib/Text'
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
    min-height: 460px;
    width: 100%;
    max-width: 1200px;
  `

  const Form = styled.form`
    background: yellow;
    width: 45%;
    padding: 40px 0;
  `

  const Input = styled.div`
    border-bottom: 1px solid rgb(204, 204, 204);
    position: relative;
    margin-top: 20px;
  `

  return (
    <Container>
      <Section>
        <Form>
          <Header>Log in</Header>
          <Input>
            <LoginInput type="email" name="email" required />
            <LoginLabel for="email">E-mail</LoginLabel>
          </Input>
          <Input>
            <LoginInput type="password" name="password" required />
            <LoginLabel for="password">Password</LoginLabel>
          </Input>
          <FormButton>Log in</FormButton>
        </Form>
        <Form>
          <Header>Register</Header>
          <p> If you still don't have a <strong>Nara.com</strong> account, use this option to access the registration form.
          </p>
          <p>By giving us your details, purchasing in <strong>Nara.com</strong> will be faster and an enjoyable experience.</p>
          <FormButton>Create account</FormButton>
        </Form>
      </Section>
    </Container>
  )
}