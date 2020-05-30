import React from 'react'
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
      <SearchLink to="/search">Search</SearchLink>
      <SearchLine to="/search" />
    </Container>
  )
}