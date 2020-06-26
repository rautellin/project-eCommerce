import React from 'react'
import { SlideHeader } from '../lib/Text'
import { NewsletterForm } from './Footer/NewsletterForm'
import { SocialMedia } from './Footer/SocialMedia'
import { FullPageContainer } from '../lib/Containers'

export const Footer = () => {
  return (
    <>
      <FullPageContainer id="footer">
        <SlideHeader>Join our newsletter</SlideHeader>
        <NewsletterForm />
        <SocialMedia />
      </FullPageContainer>
    </>
  )
}