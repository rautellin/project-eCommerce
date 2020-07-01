import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const SearchLine = styled(NavLink)`
  border-bottom: 1px solid black;
  width: 147px;
  height: 18px;

  @media screen and (max-width: 500px){
    width: 0;
}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationLinks = styled(NavLink)`
  font-family: 'Heebo', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 500;
  padding-right: 10px;

  @media screen and (max-width: 500px){
    font-size: 14px;
    font-weight: 300;
}
  `

export const Search = () => {
  return (
    <Container>
      <NavigationLinks to="/search">Search</NavigationLinks>
      <SearchLine to="/search" />
    </Container>
  )
}