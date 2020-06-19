import React from 'react'
import styled from 'styled-components'
import { NavLink, useLocation } from 'react-router-dom'

export const Filter = () => {
  const Container = styled.ul`
  position: fixed;
  top: 104px;
  left: 0;
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Heebo', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 400;
  `

  const Link = styled(NavLink)`
  padding: 0 5px;

  :active{
    text-decoration: underline;
  }
  `

  const Filters = styled.h4`  
  position: fixed;
  top: 104px;
  right: 20px;
  height: 20px;
  font-family: 'Heebo', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 400;
  `

  return (
    <Container>
      <li><Link to="/products">View all</Link></li>
      <li><Link to="/products?filter=bottomsleggings">Bottoms & Leggings</Link></li>
      <li><Link to="/products?filter=shorts">Shorts</Link></li>
      <li><Link to="/products?filter=croptop">Crop top</Link></li>
      <li><Link to="/products?filter=sportbra">Sport bra</Link></li>
      <Filters>+filters</Filters>
    </Container>
  )
}
