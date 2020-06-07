import React from 'react'
import styled from 'styled-components'
import { Logo } from './Header/Logo'
import { Search } from './Header/Search'
import { Cart } from './Header/Cart'

export const Header = () => {
  const Container = styled.section`
    height: 114px;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
  `

  return (
    <>
      <Container>
        <Logo />
        <Search />
        <Cart />
      </Container>
    </>
  )
}