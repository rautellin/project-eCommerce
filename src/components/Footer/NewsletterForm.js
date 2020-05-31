import React from 'react'
import styled from 'styled-components'
import { TextInput, Checkbox, Label, TermsLabel } from '../../lib/Input'
import { Submit } from '../../lib/Buttons'
import { FooterLink } from '../../lib/Text'

export const Form = styled.form`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-transform: uppercase;
  width: 100%;
  height: 50%;
`;

export const TermsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const NewsletterForm = () => {
  const handleSubmit = () => {
    console.log('hello')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput type="text" placeholder="Enter your email address here" />
      <CheckboxContainer>
        <Label htmlFor="Woman"><Checkbox type="checkbox" id="Woman" />Woman</Label>
        <Label htmlFor="Man"><Checkbox type="checkbox" id="Man" />Man</Label>
        <Label htmlFor="Kids"><Checkbox type="checkbox" id="Kids" />Kids</Label>
      </CheckboxContainer>
      <TermsContainer>
        <Checkbox type="checkbox" id="terms" />
        <TermsLabel htmlFor="terms">I have read and understand the <FooterLink href="/">privacy and cookies policy</FooterLink> and agree to receive personalised commercial communications from <strong>nara</strong> by email.</TermsLabel>
      </TermsContainer>
      <Submit type="submit">Subscribe</Submit>
    </Form>
  )
}