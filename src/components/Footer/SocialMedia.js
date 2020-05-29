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
      <Links href="/" target="_blank">Instagram</Links>
      <Links href="/" target="_blank">Facebook</Links>
      <Links href="/" target="_blank">Twitter</Links>
      <Links href="/" target="_blank">Pinterest</Links>
      <Links href="/" target="_blank">Youtube</Links>
    </Container>
  )
}