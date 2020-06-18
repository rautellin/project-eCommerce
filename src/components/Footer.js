import React from 'react'
import styled from 'styled-components'
import { SlideHeader } from '../lib/Text'
import { NewsletterForm } from './Footer/NewsletterForm'
import { SocialMedia } from './Footer/SocialMedia'
import { Terms } from './Footer/Terms'

export const Footer = () => {
  const Container = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
  `

  return (
    <>
      <Container id="footer">
        <SlideHeader shadow="none">Join our newsletter</SlideHeader>
        <NewsletterForm />
        <SocialMedia />
        <Terms />
      </Container>
    </>
  )
}