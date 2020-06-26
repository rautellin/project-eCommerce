import React from 'react'
import styled from 'styled-components'
import { Input, Label, InputContainer, Checkbox, InputLabel, CheckboxLabel } from '../../lib/Form'
import { SubscribeButton } from '../../lib/Buttons'
import { FooterLink } from '../../lib/Text'
import { Modal } from '../../lib/Modal'

export const Form = styled.form`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-transform: uppercase;
  width: 100%;
  height: 50%;

  :valid button {
      background: black;
      cursor: pointer;

      :hover {
        background: rgb(51, 51, 51);
      }
}
`

export const TermsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const NewsletterForm = () => {
  const handleSubmit = () => {
    console.log('hello')
  }

  return (
    <>
      <Modal>Thank you </Modal>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input width="350px" type="text" required />
          <Label>Enter your email address here</Label>
        </InputContainer>
        <CheckboxContainer>
          <InputLabel htmlFor="Campaigns"><Checkbox type="checkbox" id="Campaigns" />Campaigns</InputLabel>
          <InputLabel htmlFor="Events"><Checkbox type="checkbox" id="Events" />Events</InputLabel>
          <InputLabel htmlFor="Misc"><Checkbox type="checkbox" id="Misc" />Misc</InputLabel>
        </CheckboxContainer>
        <TermsContainer>
          <Checkbox type="checkbox" id="terms" required />
          <CheckboxLabel align="center" htmlFor="terms">I have read and understand the <FooterLink href="/">privacy and cookies policy</FooterLink> and agree to receive personalised commercial communications from <strong>nara</strong> by email.</CheckboxLabel>
        </TermsContainer>
        <SubscribeButton color="black" type="submit">Subscribe</SubscribeButton>
      </Form>
    </>
  )
}