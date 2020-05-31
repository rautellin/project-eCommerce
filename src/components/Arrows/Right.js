import React from 'react'
import styled from 'styled-components'
import { ArrowRight } from './SVG/ArrowRight'
import { NavigationLinks } from '../../lib/Text'

export const Right = () => {
  const Container = styled.div`
  display: flex;
  align-items: center;
  `

  return (
    <Container>
      <ArrowRight />
      <NavigationLinks to="/">Right</NavigationLinks>
    </Container>
  )
}