import React from 'react'
import styled from 'styled-components'
import { Links } from '../../lib/Text'

export const SocialMedia = () => {
  const Container = styled.article`
    display: flex;
    justify-content: space-evenly;
    width: 600px;
  `

  return (
    <Container>
      <Links href="/">Instagram</Links>
      <Links href="/">Facebook</Links>
      <Links href="/">Twitter</Links>
      <Links href="/">Pinterest</Links>
      <Links href="/">Youtube</Links>
    </Container>
  )
}