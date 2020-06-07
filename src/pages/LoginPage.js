import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button, Email, InputContainer, Password, Label } from '../lib/Account'
import { Header, Paragraph } from '../lib/Text'

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

  return (
    <Container>
      <Section>

        <Form>
          <Header margin="0 0 40px 0">Log in</Header>
          <InputContainer>
            <Email />
            <Label for="email">E-mail</Label>
          </InputContainer>
          <InputContainer>
            <Password />
            <Label for="email">Password</Label>
          </InputContainer>
          <Button>Log in</Button>
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