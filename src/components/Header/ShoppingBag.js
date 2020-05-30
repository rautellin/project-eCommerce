import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ShoppingBag = () => {
  const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  position: relative;
  `

  const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  `

  return (
    <Link to="cart">
      <Svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#000" fill-rule="nonzero" d="M12 7V6c0-1 1-2 2-2h4c1 0 2 1 2 2v1h7v19H5V7h7zm14 1H6v17h20V8zM13 6v1h6V6c0-.5-.5-1-1-1h-4c-.5 0-1 .5-1 1z"></path></Svg>
      <p>0</p>
    </Link>
  )
}