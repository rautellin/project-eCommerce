import React from 'react'
import styled from 'styled-components'
import { useLocation, NavLink } from 'react-router-dom'

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

  @media screen and (max-width: 500px){
    font-size: 10px;
    max-width: 100%;
    flex-wrap: wrap;
  }
  `

  const Link = styled(NavLink)`
  padding: 0 7px;

  @media screen and (max-width: 500px){
    padding: 0 3px;
  }
  `

  const location = useLocation()
  const path = location.pathname

  if (path === '/products/accessories') {
    return (
      <Container>
        <li><Link to="/products/accessories">View all</Link></li>
        <li><Link to="/products/accessories?category=headwear">Headwear</Link></li>
        <li><Link to="/products/accessories?category=equipment">Equipment</Link></li>
        <li><Link to="/products/accessories?category=bag">Bags</Link></li>
        <li><Link to="/products/accessories?category=bottle">Bottles</Link></li>
        <li><Link to="/products/accessories?category=socks">Socks</Link></li>
      </Container>
    )
  } else {
    return (
      <Container>
        <li><Link to="/products/clothes">View all</Link></li>
        <li><Link to="/products/clothes?category=leggings">Bottoms & Leggings</Link></li>
        <li><Link to="/products/clothes?category=shorts">Shorts</Link></li>
        <li><Link to="/products/clothes?category=crop">Crop tops</Link></li>
        <li><Link to="/products/clothes?category=shirt">T-shirts & Tops</Link></li>
        <li><Link to="/products/clothes?category=hoodie">Hoodies</Link></li>
        <li><Link to="/products/clothes?category=jacket">Jackets</Link></li>
        <li><Link to="/products/clothes?category=vest">Vests</Link></li>
        <li><Link to="/products/clothes?category=swimwear">Swimwear</Link></li>
        <li><Link to="/products/clothes?category=bra">Sport bras</Link></li>
      </Container>
    )
  }

}
