import React from 'react'
import styled from 'styled-components'
import { NavButton } from 'lib/Buttons'
import { NavLinks } from 'lib/Text'
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

  const toggleAccount = () => {
    const account = document.getElementById('account')
    account.classList.toggle('show')
  }

  return (
    <>
      <Nav id="navigation">
        <CloseButton />
        <ul>
          <li>
            <NavButton onClick={toggleClothes} onTouchStart={toggleClothes}>Clothes</NavButton>
            <Ul id="clothes">
              <li><NavLinks url="/products" text="View all" /></li>
              <li><NavLinks url="/products" text="Bottoms & Leggings" /></li>
              <li><NavLinks url="/products" text="Shorts" /></li>
              <li><NavLinks url="/products" text="Crop tops" /></li>
              <li><NavLinks url="/products" text="T-shirts & tops" /></li>
              <li><NavLinks url="/products" text="Hoodies" /></li>
              <li><NavLinks url="/products" text="Jackets" /></li>
              <li><NavLinks url="/products" text="Vests" /></li>
              <li><NavLinks url="/products" text="Sports bras" /></li>
              <li><NavLinks url="/products" text="Swimwear" /></li>
            </Ul>
          </li>
          <li>
            <NavButton onClick={toggleAccessories} onTouchStart={toggleAccessories}>Accessories</NavButton>
            <Ul id="accessories">
              <li><NavLinks url="/products" text="View all" /></li>
              <li><NavLinks url="/products" text="Headwear" /></li>
              <li><NavLinks url="/products" text="Equipment" /></li>
              <li><NavLinks url="/products" text="Bags" /></li>
              <li><NavLinks url="/products" text="Bottles" /></li>
              <li><NavLinks url="/products" text="Socks" /></li>
            </Ul>
          </li>
          <li>
            <NavButton onClick={toggleAccount} onTouchStart={toggleAccount}>Account</NavButton>
            <Ul id="account">
              <li><NavLinks url="/login" text="Log in" /></li>
            </Ul>
          </li>
          <li>
            <NavButton margin="82px 0 0 0" onClick={toggleHelp} onTouchStart={toggleHelp}>Help</NavButton>
            <Ul id="help">
              <li><NavLinks url="/help" text="FAQ" /></li>
              <li><NavLinks url="/help" text="Delivery" /></li>
              <li><NavLinks url="/help" text="Returns" /></li>
              <li><NavLinks url="/help" text="Orders" /></li>
            </Ul>
          </li>
        </ul>
      </Nav>
    </>
  )
}