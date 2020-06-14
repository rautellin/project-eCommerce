import React from 'react'
import styled from 'styled-components'
import { Label, InputContainer, Input, TextArea, TextAreaLabel } from '../lib/Form'
import { Header } from '../lib/Text'
import { Colors, Sizes } from '../lib/DropDown'
import { SubmitButton, FileButton } from '../lib/Buttons'

// STYLED COMPONENTS
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

export const Text = styled.p`
   font-size: ${(props) => (props.fontsize ? props.fontsize : '16px')};
   color: ${(props) => (props.color ? props.color : 'rgb(204, 204, 204)')};
   margin-top: ${(props) => (props.margintop)};
`;

//

export const AdminPage = () => {
  return (
    <Container>
      <Header>Add products</Header>
      <Text color="black">All fields are required in order to add a product.</Text>
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
            <Text fontsize="12px">Minimum 20 character</Text>
            <TextArea
              required
            />
          </InputContainer>

          <Text margintop="10px">Colors</Text>
          <Colors />
          <Text margintop="10px">Available sizes</Text>
          <Sizes />
          <FileButton
            required
            type="file"
            margintop="20px" />
          <SubmitButton type="submit" position="block" margintop="20px">Add</SubmitButton>
        </Section>

      </Form>
      <Background />
    </Container>
  )
}