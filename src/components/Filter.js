import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Filter = () => {
  const Container = styled.ul`
  position: fixed;
  top: 114px;
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
  `

  const Filters = styled.h4`  
  position: fixed;
  top: 114px;
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
      <li><Link to="/products?category=leggings">Bottoms & Leggings</Link></li>
      <li><Link to="/products?category=shorts">Shorts</Link></li>
      <li><Link to="/products?category=crop">Crop top</Link></li>
      <li><Link to="/products?category=bra">Sport bra</Link></li>
      <Filters>+filters</Filters>
    </Container>
  )
}
