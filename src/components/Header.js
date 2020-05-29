import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  const Container = styled.section`
    height: 104px;
    position: fixed;
    top: 0;
    width: 100vw;
    background: white;
  `

  return (
    <>
      <Container>
        Search
        Login Help cart
      </Container>
    </>
  )
}