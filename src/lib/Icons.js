import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CartNumber = styled.p`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-family: 'Heebo', sans-serif;
font-size: 100%;
text-transform: uppercase;
font-weight: 300;
`

export const Link = styled(NavLink)`
position: relative;
`

export const Down = styled.a`
position: absolute;
bottom: 30px;
`

export const CloseSvg = styled.svg`
position: absolute;
top: 30px;
left: ${(props) => (props.left)};
right: ${(props) => (props.right)};
cursor: pointer;
`

export const HamburgerSvg = styled.svg`
cursor: pointer;
`

export const ArrowDown = (props) => {
  return (
    <Down href={props.href}>
      <svg height="25" width="25" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" /></g></svg>
    </Down>
  )
}

export const CloseNav = ({ right, left }) => {
  const hideNav = () => {
    const navigation = document.getElementById('navigation')
    const help = document.getElementById('help')
    navigation.classList.remove('show')
    help.classList.remove('show')
  }

  return (
    <CloseSvg right={right} left={left} onClick={hideNav} onTouchStart={hideNav} id="closebutton" height="25" width="25" viewBox="0 0 24 24"><path d="M5.3 5.957l.707-.707 12.728 12.728-.707.707L5.3 5.957z" /><path d="M6.007 18.685l-.707-.707L18.028 5.25l.707.707L6.007 18.685z" /></CloseSvg>
  )
}

export const CloseCart = ({ right, left }) => {
  const hideCart = () => {
    const cart = document.getElementById('cart')
    const overlay = document.getElementById('overlay')
    cart.classList.remove('show')
    overlay.classList.remove('show')
  }

  return (
    <CloseSvg onClick={hideCart} onTouchStart={hideCart} right={right} left={left} id="closebutton" height="25" width="25" viewBox="0 0 24 24"><path d="M5.3 5.957l.707-.707 12.728 12.728-.707.707L5.3 5.957z" /><path d="M6.007 18.685l-.707-.707L18.028 5.25l.707.707L6.007 18.685z" /></CloseSvg>
  )
}

export const HamburgerMenu = () => {
  const openNav = () => {
    const navigation = document.getElementById('navigation')
    navigation.classList.add('show')
  }

  return (
    <HamburgerSvg width="32" height="32" id="menu" onClick={openNav} onTouchStart={openNav}>
      <path fill="#000" fillRule="evenodd" d="M4 9h25v.5H4V9zm0 7.2h25v.5H4v-.5zm.3 7.3H4v.5h25v-.5H4.3z" clipRule="evenodd" />
    </HamburgerSvg>
  )
}

export const ShoppingBag = () => {
  const [items, setItems] = useState(0)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('https://rautellin-final-project-api.herokuapp.com/cart')
        const json = await res.json()
        setItems(json.cartItems.reduce((total, item) => (total + (item.quantity)), 0))
      } catch (err) {
        console.log('errror')
      }
    }
    fetchProduct()
  }, [setItems])

  return (
    <Link to="/cart">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#000" fillRule="nonzero" d="M12 7V6c0-1 1-2 2-2h4c1 0 2 1 2 2v1h7v19H5V7h7zm14 1H6v17h20V8zM13 6v1h6V6c0-.5-.5-1-1-1h-4c-.5 0-1 .5-1 1z" /></svg>
      <CartNumber>{items}</CartNumber>
    </Link>
  )
}