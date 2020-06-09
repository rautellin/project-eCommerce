import React from 'react'
import styled from 'styled-components'
import { NavButton, SmallNavButton } from 'lib/Buttons'
import { PageLinks } from 'lib/Text'

export const Navigation = () => {
  const Nav = styled.nav`
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: white;
    min-width: 246px;
    padding: 82px 28px 0 32px;
    display: none;
    flex-direction: column;
  `

  const Ul = styled.ul`
    display: none;
  `

  return (
    <>
      <Nav id="navigation">
        <ul>
          <li>
            <NavButton>Clothes</NavButton>
          </li>
          <li>
            <NavButton>Shoes</NavButton>
          </li>
          <li>
            <NavButton>Accessories</NavButton>
          </li>
          <li>
            <NavButton margin="82px 0">Join Life</NavButton>
          </li>
        </ul>
        <ul>
          <li>
            <SmallNavButton>+ info</SmallNavButton>
            <Ul>
              <li>
                <PageLinks to="/">Newsletter</PageLinks>
              </li>
              <li>
                <PageLinks to="/login">Login</PageLinks>
              </li>
              <li>
                <PageLinks to="/help">Help</PageLinks>
              </li>
            </Ul>
          </li>
        </ul>
      </Nav>
    </>
  )
}