import React from 'react'
import styled from 'styled-components'
import { PageLinks } from '../../lib/Text'
import { ShoppingBag } from '../../lib/Icons'

export const Container = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
`;

export const Cart = () => {
  return (
    <Container>
      <PageLinks to="/login">Log in</PageLinks>
      <PageLinks to="/help">Help</PageLinks>
      <ShoppingBag>0</ShoppingBag>
    </Container>
  )
}