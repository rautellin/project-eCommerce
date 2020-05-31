import React from 'react'
import styled from 'styled-components'
import { NavButton } from 'lib/Buttons'

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
    display: flex;
    flex-direction: column;
  `

  return (
    <>
      <Nav>
        <ul>
          <li>
            <NavButton>Woman</NavButton>
          </li>
          <li>
            <NavButton>Man</NavButton>
          </li>
          <li>
            <NavButton>Kids</NavButton>
          </li>
          <li>
            <NavButton>Join Life</NavButton>
          </li>
        </ul>
        +info
      </Nav>
    </>
  )
}