import React from 'react'
import styled from 'styled-components'
import { Button, Checkbox, CheckboxLabel, Label, InputContainer, Input, InputDescription, TextArea, TextAreaLabel } from '../lib/Form'
import { Header } from '../lib/Text'
import { Colors } from '../lib/DropDown'

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

export const AdminPage = () => {
  return (
    <Container>
      <Header>Add products here</Header>
      <Form action="">
        <Section>

          <InputContainer>
            <Input
              required
              type="text" />
            <Label>Title</Label>
          </InputContainer>

          <InputContainer>
            <Input
              required
              type="text" />
            <Label>Image</Label>
          </InputContainer>

          <InputContainer>
            <Input
              required
              type="number" />
            <Label>Price</Label>
          </InputContainer>

          <InputContainer>
            <TextAreaLabel>Description</TextAreaLabel>
            <TextArea
              required
            />
            <InputDescription>Minimum 20 character</InputDescription>
          </InputContainer>

        </Section>
        <Section>
          <InputContainer>
            <Input
              required
              type="text" />
            <Label for="email">Title</Label>
          </InputContainer>

          <Colors />
        </Section>
        <Button type="submit" width="45%">Add</Button>
      </Form>
    </Container>
  )
}