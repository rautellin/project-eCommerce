import React from 'react'
import styled from 'styled-components'
import { ExternalLinks } from '../../lib/Text'

export const SocialMedia = () => {
  const Container = styled.article`
    display: flex;
    justify-content: space-evenly;
    width: 600px;
  `

  return (
    <Container>
      <ExternalLinks href="/" target="_blank">Instagram</ExternalLinks>
      <ExternalLinks href="/" target="_blank">Facebook</ExternalLinks>
      <ExternalLinks href="/" target="_blank">Twitter</ExternalLinks>
      <ExternalLinks href="/" target="_blank">Pinterest</ExternalLinks>
      <ExternalLinks href="/" target="_blank">Youtube</ExternalLinks>
    </Container>
  )
}