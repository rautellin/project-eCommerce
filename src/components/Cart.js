import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Quantity } from './Quantity'
import { NavLinks } from 'lib/Text'
import { CloseCart } from 'lib/Icons'
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
transform: translate3d(100%, 0, 0);
transition: all 0.5s ease-out;
flex-direction: column;

&&.show{
transform: translate3d(0, 0, 0) !important;
}
`

export const Overlay = styled.div`
height: 100%;
position: fixed;
top: 0;
width: 100%;
z-index: -10;
background: rgba(0,0,0,0.0);
transition: all 0.5s ease-out; 

&&.show{
  background: rgba(0,0,0,0.5);
  z-index: 9;
}
`

export const Ul = styled.ul`
display: none;

&&.show {
  display: block;
}
`

export const Cart = () => {
  const [items, setItems] = useState([])
  const totalPrice = items.reduce((total, item) => (total + (item.price * item.quantity)), 0)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('https://rautellin-final-project-api.herokuapp.com/cart')
        const json = await res.json()
        setItems(json.cartItems)
      } catch (err) {
        console.log('errror')
      }
    }
    fetchProduct()
  }, [setItems])

  const hideCart = () => {
    const cart = document.getElementById('cart')
    const overlay = document.getElementById('overlay')
    cart.classList.remove('show')
    overlay.classList.remove('show')
  }

  return (
    <>
      <Nav id="cart">
        <CloseCart right="30px" />
        <NavLinks url="/cart" text="Your cart" />
        {items.map((item, index) => (
          <div key={index}>
            <p>{item.title}{item.color}</p>
            <p>{item.selectedSize}</p>
            <p>{item.price}</p>
            <Quantity item={item} />
          </div>
        ))}
        <p>Total {totalPrice}.00 SEK</p>
        <NavLink to="/cart">
          <SubmitButton position="block" background="rgb(2, 114, 169)" hover="rgb(1, 91, 132)">Checkout</SubmitButton>
        </NavLink>
        <NavLink to="/cart">
          <SubmitButton position="block" margintop="10px">Your cart</SubmitButton>
        </NavLink>
      </Nav>
      <Overlay id="overlay" onClick={hideCart} onTouchStart={hideCart} />
    </>
  )
}