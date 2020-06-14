import React from 'react'
import styled from 'styled-components'
import { Button, Label, InputContainer, Input, InputDescription, TextArea, TextAreaLabel, FileButton } from '../lib/Form'
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
min-height: 480px;
`

export const Form = styled.form`
position: relative;
display: flex;
justify-content: space-between;
`

export const Section = styled.section`
width: 45%;
position: relative;
`

export const Title = styled.p`
   font-size: 16px;
   color: rgb(204, 204, 204);
   margin-top: 10px;
`;

export const Description = styled.p`
   font-size: 12px;
   color: rgb(204, 204, 204);
`;

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
              type="text" />
            <Label>Price</Label>
          </InputContainer>

          <InputContainer>
            <TextAreaLabel>Description</TextAreaLabel>
            <Description>Minimum 20 character</Description>
            <TextArea
              required
            />
          </InputContainer>

          <Title>Colors</Title>
          <Colors />
          <Title>Available sizes</Title>
          <Sizes />
          <FileButton
            required
            type="file" />
          <Button type="submit" position="block">Add</Button>
        </Section>

      </Form>
      <Background />
    </Container>
  )
}