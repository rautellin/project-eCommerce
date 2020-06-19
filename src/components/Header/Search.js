import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { SearchLine } from '../../lib/Text'

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* display: hidden;  when the search page is active*/
`;

const NavigationLinks = styled(NavLink)`
  font-family: 'Heebo', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 500;
  padding-right: 10px;
  `

export const Search = () => {
  return (
    <Container>
      <NavigationLinks to="/search">Search</NavigationLinks>
      <SearchLine to="/search" />
    </Container>
  )
}