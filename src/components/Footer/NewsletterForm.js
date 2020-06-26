import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Label, InputContainer, Checkbox, InputLabel, CheckboxLabel } from '../../lib/Form'
import { SubscribeButton } from '../../lib/Buttons'
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
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const modal = document.getElementById('modal')
    modal.classList.add('show')
    const checkboxes = document.querySelectorAll('.newsletter')
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false
    })
    setEmail('')
  }

  return (
    <>
      <Modal text={`In order to receive our newsletters you need to confirm your subscription. Please check your email ${email} for more information. `} />
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input width="350px" type="text" required value={email} onChange={(event) => setEmail(event.target.value)} />
          <Label>Enter your email address here</Label>
        </InputContainer>
        <CheckboxContainer>
          <InputLabel htmlFor="Campaigns"><Checkbox className="newsletter" type="checkbox" id="Campaigns" />Campaigns</InputLabel>
          <InputLabel htmlFor="Events"><Checkbox className="newsletter" type="checkbox" id="Events" />Events</InputLabel>
          <InputLabel htmlFor="Misc"><Checkbox className="newsletter" type="checkbox" id="Misc" />Misc</InputLabel>
        </CheckboxContainer>
        <TermsContainer>
          <Checkbox className="newsletter" type="checkbox" id="terms" required />
          <CheckboxLabel align="center" htmlFor="terms">I have read and understand the <a style={{ textDecoration: 'underline' }} href="/">privacy and cookies policy</a> and agree to receive personalised commercial communications from <strong>nara</strong> by email.</CheckboxLabel>
        </TermsContainer>
        <SubscribeButton color="black" type="submit">Subscribe</SubscribeButton>
      </Form>
    </>
  )
}