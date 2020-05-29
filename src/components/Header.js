import React from 'react'
import styled from 'styled-components'
import { Nav } from './Header/Nav'

export const Header = () => {
  const Container = styled.section`
    height: 104px;
    position: fixed;
    top: 0;
    width: 100vw;
    background: white;
  `

  return (
    <>
      <Container>
        <Nav />
        Search
        Login Help cart
      </Container>
    </>
  )
}