import React from 'react'
import styled from 'styled-components'

export const QuantityContainer = styled.div`
display: flex;
font-family: 'Heebo', sans-serif;
font-size: 15px;
text-transform: uppercase;
font-weight: 300;
width: 120px;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 500px){
  justify-content: center;
  }
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
cursor: pointer;

:hover{
  background: black;
  color: white;
}

@media screen and (max-width: 500px){
  width: 20px;
  height: 20px;
  margin: 0 4px;
  }
`

export const Quantity = ({ item }) => {
  const { id, quantity } = item

  const decreaseQty = async () => {
    await fetch(`https://rautellin-final-project-api.herokuapp.com/cart/${id}/decrease`, {
      method: 'PUT'
    })
      .then((res) => res.json())
      .then(() => console.log('decrease'))
  }

  const increaseQty = async () => {
    await fetch(`https://rautellin-final-project-api.herokuapp.com/cart/${id}/increase`, {
      method: 'PUT'
    })
      .then((res) => res.json())
      .then(() => console.log('increase'))
  }

  return (
    <QuantityContainer>
      <QuantityButton onClick={decreaseQty}>-</QuantityButton>
      {quantity}
      <QuantityButton onClick={increaseQty}>+</QuantityButton>
    </QuantityContainer>
  )
}