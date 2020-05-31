import React from 'react'
import styled from 'styled-components'
import { ArrowLeft } from './SVG/ArrowLeft'
import { NavigationLinks } from '../../lib/Text'

export const Left = () => {
  const Container = styled.div`
  display: flex;
  align-items: center;
  `

  return (
    <Container>
      <NavigationLinks to="/">Left</NavigationLinks>
      <ArrowLeft />
    </Container>
  )
}