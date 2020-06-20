import React from 'react'
import styled from 'styled-components'
import { NavButton } from 'lib/Buttons'
import { PageLinks } from 'lib/Text'
import { CloseButton } from 'lib/Icons'

export const Nav = styled.nav`
height: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 10;
background: white;
min-width: 246px;
padding: 82px 28px 0 32px;
transform: translate3d(-100%, 0, 0);
transition: all 0.5s ease-out;
flex-direction: column;

&&.show{
transform: translate3d(0, 0, 0) !important;
}
`

export const Ul = styled.ul`
display: none;

&&.show {
  display: block;
}
`

export const Navigation = () => {
  const toggleHelp = () => {
    const help = document.getElementById('help')
    help.classList.toggle('show')
  }

  const toggleClothes = () => {
    const clothes = document.getElementById('clothes')
    clothes.classList.toggle('show')
  }

  const toggleAccessories = () => {
    const accessories = document.getElementById('accessories')
    accessories.classList.toggle('show')
  }

  return (
    <>
      <Nav id="navigation">
        <CloseButton />
        <ul>
          <li>
            <NavButton onClick={toggleClothes} onTouchStart={toggleClothes}>Clothes</NavButton>
            <Ul id="clothes">
              <li><PageLinks to="/products">View all</PageLinks></li>
              <li><PageLinks to="/products">Bottoms & Leggings</PageLinks></li>
              <li><PageLinks to="/product">Shorts</PageLinks></li>
              <li><PageLinks to="/products">Crop tops</PageLinks></li>
            </Ul>
          </li>
          <li>
            <NavButton onClick={toggleAccessories} onTouchStart={toggleAccessories}>Accessories</NavButton>
            <Ul id="accessories">
              <li><PageLinks to="/products">View all</PageLinks></li>
              <li><PageLinks to="/products">Headwear</PageLinks></li>
              <li><PageLinks to="/product">Equipment</PageLinks></li>
              <li><PageLinks to="/products">Bags</PageLinks></li>
              <li><PageLinks to="/products">Bottles</PageLinks></li>
              <li><PageLinks to="/products">Socks</PageLinks></li>
            </Ul>
          </li>
          <li>
            <NavButton>Account</NavButton>
          </li>
          <li>
            <NavButton margin="82px 0 0 0" onClick={toggleHelp} onTouchStart={toggleHelp}>Help</NavButton>
            <Ul id="help">
              <li><PageLinks to="/help">FAQ</PageLinks></li>
              <li><PageLinks to="/help">Delivery</PageLinks></li>
              <li><PageLinks to="/help">Returns</PageLinks></li>
              <li><PageLinks to="/help">Orders</PageLinks></li>
            </Ul>
          </li>
        </ul>
      </Nav>
    </>
  )
}