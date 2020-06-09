import React from 'react'
import styled from 'styled-components'

export const Menu = () => {
  const Svg = styled.svg`
  cursor: pointer;
`;

  return (
    <Svg width="32" height="32" >
      <path fill="#000" fillRule="evenodd" d="M4 9h25v.5H4V9zm0 7.2h25v.5H4v-.5zm.3 7.3H4v.5h25v-.5H4.3z" clipRule="evenodd" />
    </Svg>
  )
}
