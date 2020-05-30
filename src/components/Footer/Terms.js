import React from 'react'
import styled from 'styled-components'
import { ExternalLinks } from '../../lib/Text'

export const Terms = () => {
  const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
  `

  return (
    <Container>
      <ExternalLinks href="/" margin="0 5px" target="_blank">Privacy Policy</ExternalLinks> | <ExternalLinks href="/" margin="0 5px" target="_blank">Terms of use</ExternalLinks>
    </Container>
  )
}