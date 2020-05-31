import React from 'react'
import styled from 'styled-components'

export const Pagination = () => {
  const Container = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  `

  const Bullet = styled.span`
  width: 5px;
  height: 5px;
  background: black;
  border-radius: 50%;
  cursor: pointer;
  margin: 6px 2px;

  &.active{
    border: 1px solid black;
    background: transparent;
    width: 9px;
    height: 9px;
    margin: 5px 0;
  }
  `

  return (
    <Container>
      <Bullet ariaLabel="Go to slide 1" />
      <Bullet ariaLabel="Go to slide 2" />
      <Bullet ariaLabel="Go to slide 3" className="active" />
      <Bullet ariaLabel="Go to slide 4" />
      <Bullet ariaLabel="Go to slide 5" />
    </Container>
  )
}