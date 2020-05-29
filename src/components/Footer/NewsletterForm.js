import React from 'react'
import styled from 'styled-components'
import { TextInput, GenderCheck, AgreeCheck } from '../../lib/Input'
import { Submit } from '../../lib/Buttons'

export const Form = styled.form`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewsletterForm = () => {
  const handleSubmit = () => {
    console.log('hello')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput type="text" placeholder="Enter your email address here" />
      <GenderCheck />
      <GenderCheck />
      <GenderCheck />
      <AgreeCheck />
      <Submit type="submit">Subscribe</Submit>
    </Form>
  )
}