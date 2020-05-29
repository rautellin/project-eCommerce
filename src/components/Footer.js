import React from 'react'
import styled from 'styled-components'
import { SectionHeader } from '../lib/Text'
import { NewsletterForm } from './Footer/NewsletterForm'
import { SocialMedia } from './Footer/SocialMedia'
import { Terms } from './Footer/Terms'

export const Footer = () => {
  const Container = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
  `

  return (
    <>
      <Container>
        <SectionHeader>Join our newsletter</SectionHeader>
        <NewsletterForm />
        <SocialMedia />
        <Terms />
      </Container>
    </>
  )
}