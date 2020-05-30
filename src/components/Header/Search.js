import React from 'react'
import styled from 'styled-components'
import { TextInput } from '../../lib/Input'
import { SearchLink } from '../../lib/Text'

export const Form = styled.form`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
`;

export const Search = () => {
  return (
    <div>
      <SearchLink>Search</SearchLink>
      <TextInput type="text" />
    </div>
  )
}