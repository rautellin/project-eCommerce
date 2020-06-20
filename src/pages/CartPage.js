import React from 'react'
import { useParams, useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PageContainer, Form } from '../lib/Containers'
import { Header, MediumHeader } from '../lib/Text'
import { SubmitButton } from '../lib/Buttons'

export const Checkout = styled.section`
width: 45%;
position: absolute;
right: 0;
top: 0;
height: 100%;
min-height: 480px;
`

export const CartPage = () => {
  const { id } = useParams()

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()
  const quantity = query.get('qty')

  return (
    <PageContainer>
      <Header>Shopping cart</Header>
      <Form>
        <MediumHeader>
          Your cart is currently empty. Continue browsing <NavLink to="/products">here</NavLink>.
        </MediumHeader>
      </Form>
      <Checkout>
        <SubmitButton>Checkout</SubmitButton>
      </Checkout>
    </PageContainer>
  )
}