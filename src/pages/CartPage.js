import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CenterContainer } from '../lib/Containers'
import { Header, MediumHeader, SmallerHeader, Text } from '../lib/Text'
import { SubmitButton } from '../lib/Buttons'
import { Table, TableHeader, TableHeaders, TableBorder, Image, DetailsContainer } from '../lib/Table'
import { Quantity } from '../components/Quantity'

export const Checkout = styled.section`
width: 40%;
align-self: flex-end;
display: flex;
flex-direction: column;
align-items: flex-end;
margin-top: 20px;
`

export const CartPage = () => {
  const [items, setItems] = useState([])
  const totalPrice = items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  const totalItems = items.reduce((total, item) => (total + (item.quantity)), 0)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('https://rautellin-final-project-api.herokuapp.com/cart')
        const json = await res.json()
        setItems(json.cartItems)
      } catch (err) {
        console.log('errror')
      }
    }
    fetchProduct()
  }, [setItems])

  return (
    <CenterContainer>
      <Header>Shopping cart</Header>
      {(totalItems === 0) ? <MediumHeader> Your cart is currently empty. Continue browsing <NavLink to="/products">here</NavLink>.</MediumHeader> :
        <>
          <MediumHeader>{totalItems} products</MediumHeader>
          <Table>
            <TableHeader>
              <tr>
                <TableHeaders width="70%">Item</TableHeaders>
                <TableHeaders>Quantity</TableHeaders>
                <TableHeaders>Subtotal</TableHeaders>
              </tr>
            </TableHeader>
            {items.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <TableBorder>
                    <DetailsContainer>
                      <NavLink to={`/product/${item.id}`}><Image src={item.imageUrl} /></NavLink>
                      <div>
                        <NavLink to={`/product/${item.id}`}><SmallerHeader>{item.title} - {item.color}</SmallerHeader></NavLink>
                        <Text>{item.selectedSize}</Text>
                      </div>
                    </DetailsContainer>
                  </TableBorder>
                  <TableBorder>
                    <Quantity item={item} />
                  </TableBorder>
                  <TableBorder>
                    <SmallerHeader>{(item.price * item.quantity)}</SmallerHeader>
                  </TableBorder>
                </tr>
              </tbody>
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