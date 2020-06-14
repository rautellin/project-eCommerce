import React from 'react'
import styled from 'styled-components'
import { Button, Label, InputContainer, Input, InputDescription, TextArea, TextAreaLabel, DropDownDescription } from '../lib/Form'
import { Header } from '../lib/Text'
import { Colors, Sizes } from '../lib/DropDown'

export const Container = styled.section`
width: 100%;
max-width: 1200px;
min-height: 480px;
position: relative;
`
export const Background = styled.section`
width: 45%;
position: absolute;
right: 0;
top: 0;
background: url(./images/admin.jpg);
background-size: cover;
height: 100%;
`

export const Form = styled.form`
position: relative;
display: flex;
justify-content: space-between;
`

export const Section = styled.section`
width: 45%;
padding: 40px 0;
position: relative;
background: ${(props) => (props.background)};
background-size: cover;
min-height: 100%;
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
      <Header>Add products</Header>
      <p>All fields are required</p>
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

          <Input
            required
            type="file" />

          <DropDownDescription>Colors</DropDownDescription>
          <Colors />
          <DropDownDescription>Available sizes</DropDownDescription>
          <Sizes />

        </Section>
        <Button type="submit" width="45%">Add</Button>
      </Form>
      <Background />
    </Container>
  )
}