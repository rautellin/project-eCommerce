import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
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
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('https://rautellin-final-project-api.herokuapp.com/cart')
        const json = await res.json()
        setItems(json)
      } catch (err) {
        setError(true)
      }
    }
    fetchProduct()
  }, [setItems, setError])

  const totalPrice = items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  console.log(totalPrice)
  return (
    <CenterContainer>
      <Header>Shopping cart</Header>
      {(items.length === 0) ? <MediumHeader> Your cart is currently empty. Continue browsing <NavLink to="/products">here</NavLink>.</MediumHeader> :
        <>
          <MediumHeader>{items.length} products</MediumHeader>
          <Table>
            <TableTop>
              <TableHeader width="70%">Item</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Subtotal</TableHeader>
            </TableTop>
            {items.map((item, index) => (
              <tr>
                <TableBorder>
                  <SmallerHeader key={index}>{item.title}</SmallerHeader>
                </TableBorder>
                <TableBorder>
                  <Quantity>
                    <QuantityButton>-</QuantityButton>
                    {item.quantity}
                    <QuantityButton>+</QuantityButton>
                  </Quantity>
                </TableBorder>
                <TableBorder>
                  <SmallerHeader>{(item.price * item.quantity)}</SmallerHeader>
                </TableBorder>
              </tr>
            ))}
          </Table>
          <Checkout>
            <MediumHeader>Total: {totalPrice}.00 SEK</MediumHeader>
            <SubmitButton position="none" margintop="20px">Checkout</SubmitButton>
          </Checkout>
        </>}
    </CenterContainer>
  )
}