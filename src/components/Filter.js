import React from 'react'
import styled from 'styled-components'

export const Filter = ({ justify, marginleft }) => {
  const Container = styled.ul`
  position: fixed;
  top: 114px;
  left: 0;
  height: 20px;
  width: 100%;
  background: pink;
  display: flex;
  justify-content: center;
  `

  return (
    <Container>
      <li>View all</li>
      <li>Bottoms & Leggings</li>
      <li>Shorts</li>
      <li>Crop top</li>
      <li>Sport bra</li>
    </Container>
  )
}
