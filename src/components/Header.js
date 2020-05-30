import React from 'react'
import styled from 'styled-components'
import { Nav } from './Header/Nav'
import { Search } from './Header/Search'
import { Cart } from './Header/Cart'

export const Header = () => {
  const Container = styled.section`
    height: 104px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: white;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
  `

  return (
    <>
      <Container>
        <Nav />
        <Search />
        <Cart />
      </Container>
    </>
  )
}