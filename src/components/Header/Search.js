import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { SearchLink, SearchLine } from '../../lib/Text'

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* display: hidden;  when the search page is active*/
`;

export const Search = () => {
  return (
    <Container>
      <NavLink to="/search"><SearchLink>Search</SearchLink></NavLink>
      <NavLink to="/search"><SearchLine /></NavLink>
    </Container>
  )
}