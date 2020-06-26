import React from 'react'
import styled from 'styled-components'
import { ExternalLinks } from '../../lib/Text'

export const SocialMedia = () => {
  const Container = styled.article`
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
  `

  return (
    <Container>
      <ExternalLinks href="/" text="Facebook" />
      <ExternalLinks href="/" text="Instagram" />
      <ExternalLinks href="/" text="Twitter" />
      <ExternalLinks href="/" text="Pinterest" />
      <ExternalLinks href="/" text="Youtube" />
    </Container>
  )
}