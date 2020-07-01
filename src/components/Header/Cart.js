import React from 'react'
import styled from 'styled-components'
import { PageLinks } from '../../lib/Text'
import { ShoppingBag } from '../../lib/Icons'

export const Container = styled.ul`
  display: flex;
  align-items: center;
`;

export const Actions = styled.li`
  margin-left: 16px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px){
  display: none;
  
  :nth-child(odd) {
    display: flex;
  }
  }
`;

export const Cart = () => {
  return (
    <Container>
      <Actions><PageLinks to="/login">Log in</PageLinks></Actions>
      <Actions><PageLinks to="/help">Help</PageLinks></Actions>
      <Actions><ShoppingBag /></Actions>
    </Container>
  )
}