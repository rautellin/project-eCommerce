import React from 'react'
import { Header } from '../lib/Text'
import { PageContainer, Form, SectionImage } from '../lib/Containers'

export const UserPage = () => {
  return (
    <>
      <PageContainer>
        <Form>
          <Header>Welcome</Header>
        </Form>
        <SectionImage src="/images/user.jpg" />
      </PageContainer>
    </>
  )
}