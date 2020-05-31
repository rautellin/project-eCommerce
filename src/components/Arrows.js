import React from 'react'
import styled from 'styled-components'
import { Left } from './Arrows/Left'
import { Right } from './Arrows/Right'

export const Arrows = () => {
  const Container = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  width: 100%;
  display: flex;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  `

  return (
    <Container>
      <Left />
      <Right />
    </Container>
  )
}