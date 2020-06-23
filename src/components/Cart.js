import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { NavLinks } from 'lib/Text'
import { CloseButton } from 'lib/Icons'
import { SubmitButton } from 'lib/Buttons'

export const Nav = styled.nav`
height: 100%;
position: fixed;
top: 0;
right: 0;
z-index: 10;
background: white;
width: 246px;
padding: 82px 28px 0 28px;
/* transform: translate3d(0, -100%, 0);
transition: all 0.5s ease-out; */
flex-direction: column;

&&.show{
transform: translate3d(0, 0, 0) !important;
}
`

export const Overlay = styled.div`
height: 100%;
position: fixed;
top: 0;
right: 246px;
width: 100%;
z-index: 10;
background: rgba(0,0,0,0.5);

&&.show{
  background: rgba(0,0,0,0.5);
}
`

export const Ul = styled.ul`
display: none;

&&.show {
  display: block;
}
`

export const Cart = () => {
  return (
    <>
      <Nav id="cart">
        <CloseButton right="30px" />
        <NavLinks url="/cart" text="Your cart" />
        <NavLink to="/cart">
          <SubmitButton position="block" background="rgb(2, 114, 169)" hover="rgb(1, 91, 132)">Checkout</SubmitButton>
        </NavLink>
        <NavLink to="/cart">
          <SubmitButton position="block" margintop="10px">Your cart</SubmitButton>
        </NavLink>
      </Nav>
      <Overlay />
    </>
  )
}