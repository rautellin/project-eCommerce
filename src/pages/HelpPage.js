import React from 'react'
import { Header, Paragraph } from '../lib/Text'
import { CenterContainer } from '../lib/Containers'

export const HelpPage = () => {
  return (
    <CenterContainer justifyContent="center">
      <Header> Help</Header>
      <Paragraph> Here you will find a FAQ</Paragraph>
    </CenterContainer>
  )
}