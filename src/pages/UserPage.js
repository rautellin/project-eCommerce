import React, { useState, useEffect } from 'react'
import { user, logout, getSecretMessage } from '../reducers/user'
import { useDispatch, useSelector } from 'react-redux'
import { Header, Paragraph } from '../lib/Text'
import { PageContainer, Form, SectionImage } from '../lib/Containers'

const URL = 'https://rautellin-final-project-api.herokuapp.com/users';

export const UserPage = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const secretMessage = useSelector((store) => store.user.login.secretMessage)
  const errorMessage = useSelector((store) => store.user.login.errorMessage)

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