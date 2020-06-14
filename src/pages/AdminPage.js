import React from 'react'
import styled from 'styled-components'
import { Button, TextInput, Checkbox, CheckboxLabel, Label } from '../lib/Form'
import { Header } from '../lib/Text'

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
          <TextInput></TextInput>
        </Section>
        <Button type="submit" width="45%">Add</Button>
      </Form>
    </Container>
  )
}