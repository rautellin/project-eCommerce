import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { cart } from 'reducers/cart'
import { PageContainer, Form } from '../lib/Containers'
import { Header, MediumHeader, SmallerHeader } from '../lib/Text'
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
  const products = useSelector((store) => store.cart)
  console.log(products)
  const totalPrice = products.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  console.log(totalPrice)
  const dispatch = useDispatch()
  return (
    <PageContainer>
      <Header>Shopping cart</Header>
      <Form>
        {(products.length === 0) ? <MediumHeader> Your cart is currently empty. Continue browsing <NavLink to="/products">here</NavLink>.</MediumHeader> :
          <>
            <MediumHeader>{products.length} products</MediumHeader>
            <ul>
              {products.map((item, index) => (
                <>
                  <SmallerHeader key={index}>{item.title}</SmallerHeader>
                  <button type="button" onClick={() => dispatch(cart.actions.removeItem(item))}>-</button>
                  <button type="button" onClick={() => dispatch(cart.actions.addItem(item))}>+</button>
                </>
              ))}
            </ul>
          </>}
      </Form>
      <Checkout>
        <MediumHeader>Total: {totalPrice}.00 SEK</MediumHeader>
        <SubmitButton>Checkout</SubmitButton>
      </Checkout>
    </PageContainer>
  )
}