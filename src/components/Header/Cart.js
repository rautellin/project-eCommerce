import React from 'react'
import styled from 'styled-components'
import { Links } from '../../lib/Text'
import { ShoppingBag } from '../../lib/Icons'

export const Container = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
`;

export const Cart = () => {
  return (
    <Container>
      <Links>Log in</Links>
      <Links>Help</Links>
      <ShoppingBag>0</ShoppingBag>
    </Container>
  )
}