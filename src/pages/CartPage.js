import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { cart } from 'reducers/cart'
import { CenterContainer, Table, TableTop, TableBorder } from '../lib/Containers'
import { Header, MediumHeader, SmallerHeader, TableHeader } from '../lib/Text'
import { SubmitButton } from '../lib/Buttons'

export const Checkout = styled.section`
width: 40%;
align-self: flex-end;
display: flex;
flex-direction: column;
align-items: flex-end;
margin-top: 20px;
`

export const Quantity = styled.div`
display: flex;
font-family: 'Heebo', sans-serif;
font-size: 15px;
text-transform: uppercase;
font-weight: 300;
width: 120px;
justify-content: space-between;
align-items: center;
`

export const QuantityButton = styled.button`
all: unset;
border: 1px solid rgb(238, 238, 238);
font-family: 'Heebo', sans-serif;
font-size: 15px;
text-transform: uppercase;
font-weight: 300;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
`

export const CartPage = () => {
  const products = useSelector((store) => store.cart)
  const totalPrice = products.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  const dispatch = useDispatch()
  return (
    <CenterContainer>
      <Header>Shopping cart</Header>
      {(products.length === 0) ? <MediumHeader> Your cart is currently empty. Continue browsing <NavLink to="/products">here</NavLink>.</MediumHeader> :
        <>
          <MediumHeader>{products.length} products</MediumHeader>
          <Table>
            <TableTop>
              <TableHeader width="70%">Item</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Subtotal</TableHeader>
            </TableTop>
            {products.map((item, index) => (
              <tr>
                <TableBorder>
                  <SmallerHeader key={index}>{item.product.title}</SmallerHeader>
                </TableBorder>
                <TableBorder>
                  <Quantity>
                    <QuantityButton onClick={() => dispatch(cart.actions.removeItem(item))}>-</QuantityButton>
                    {item.quantity}
                    <QuantityButton onClick={() => dispatch(cart.actions.addItem(item))}>+</QuantityButton>
                  </Quantity>
                </TableBorder>
                <TableBorder>
                  <SmallerHeader>{(item.product.price * item.product.quantity)}</SmallerHeader>
                </TableBorder>
              </tr>
            ))}
          </Table>
        </>}
      <Checkout>
        <MediumHeader>Total: {totalPrice}.00 SEK</MediumHeader>
        <SubmitButton position="none" margintop="20px">Checkout</SubmitButton>
      </Checkout>
    </CenterContainer>
  )
}