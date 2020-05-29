import React from 'react'
import styled from 'styled-components'

export const Nav = () => {
  const Container = styled.div`

  `

  const Logo = styled.h1`
  font-family: 'Vidaloka', serif;
  font-size: 72px;
  font-weight: lighter;
  letter-spacing: -10px;
  text-transform: uppercase;
  `

  return (
    <Container>
      <Logo>Nara</Logo>
    </Container>
  )
}