import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ArrowLeft = ({ justify, marginleft }) => {
  const ArrowContainer = styled(NavLink)`
  display: flex;
  justify-content: ${justify};
  width: 100%;
  margin-left: ${marginleft};

  :hover svg{
    opacity: 1;
  }
  `

  const NavigationLinks = styled.h2`
  font-family: 'Heebo', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 300;
  padding-right: 10px;
  `

  const Svg = styled.svg`
  opacity: 0;
  `

  return (
    <ArrowContainer to="/products">
      <Svg version="1.1" width="25" height="25" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 129 129"><g><path d="M94.3,121.3c1.6-1.6,1.6-4.2,0-5.8l-51.1-51l51.1-51.1c1.6-1.6,1.6-4.2,0-5.8s-4.2-1.6-5.8,0L34.6,61.5c-0.8,0.8-1.2,1.8-1.2,2.9c0,1,0.4,2.1,1.2,2.9l53.9,53.9C90.1,122.9,92.7,122.9,94.3,121.3z" /></g></Svg>
      <NavigationLinks>Back to results</NavigationLinks>
    </ArrowContainer>
  )
}