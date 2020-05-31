import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Menu } from './SVG/Menu'

export const Logo = () => {
  const Container = styled.div`
  display: flex;
  align-items: center;
  `

  const Nara = styled.h1`
  font-family: 'Vidaloka', serif;
  font-size: 72px;
  font-weight: lighter;
  letter-spacing: -10px;
  text-transform: uppercase;
  margin-left: 10px;
  `

  return (
    <Container>
      <Menu />
      <NavLink to="/" title="NARA Sweden, Go to the NARA Homepage"><Nara>Nara</Nara></NavLink>
    </Container>
  )
}