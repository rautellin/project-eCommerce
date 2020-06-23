import React from 'react'
import styled from 'styled-components'

export const Paragraph = styled.p`
  font-size: 14px;
  color: rgb(204, 204, 204);
  cursor: pointer;
  text-decoration: underline;
`

export const Remove = ({ item }) => {
  const { id } = item

  const removeItem = async () => {
    await fetch(`https://rautellin-final-project-api.herokuapp.com/cart/${id}/remove`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then(() => console.log('removed'))
  }

  return (
    <Paragraph onClick={removeItem}>Remove</Paragraph>
  )
}