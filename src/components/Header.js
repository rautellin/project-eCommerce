import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Logo } from './Header/Logo'
import { Search } from './Header/Search'
import { Cart } from './Header/Cart'

export const Container = styled.section`
height: 114px;
position: fixed;
z-index: 2;
top: 0;
left: 0;
width: 100vw;
display: flex;
justify-content: space-between;
padding: 0 30px;
background: ${(props) => (props.background)};

@media screen and (max-width: 500px){
  padding: 0 10px;
}
`

export const Header = () => {
  const location = useLocation()
  const path = location.pathname
  const background = (path === '/') ? 'none' : 'white'
  return (
    <>
      <Container background={background}>
        <Logo />
        {(path === '/search') ? null : <Search />}
        <Cart />
      </Container>
    </>
  )
}