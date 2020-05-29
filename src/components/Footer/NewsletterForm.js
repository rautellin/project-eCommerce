import React from 'react'
import styled from 'styled-components'
import { TextInput, GenderCheck, AgreeCheck } from '../../lib/Input'
import { Submit } from '../../lib/Buttons'

export const Form = styled.form`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
`;

export const NewsletterForm = () => {
  const handleSubmit = () => {
    console.log('hello')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput type="text" placeholder="Enter your email address here" />
      <GenderCheck>Woman</GenderCheck>
      <GenderCheck>Man</GenderCheck>
      <GenderCheck>Kids</GenderCheck>
      <AgreeCheck>I have read and understand the privacy and cookies policy and agree to receive personalised commercial communications from <strong>nara</strong> by email.</AgreeCheck>
      <Submit type="submit">Subscribe</Submit>
    </Form>
  )
}