import React from 'react'
import styled from 'styled-components'
import { Header } from '../lib/Text'

export const HomePage = () => {
  const Container = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(./images/page1.jpg);
    background-size: cover;
  `

  return (
    <>
      <Container>
        <Header>Collection</Header>
      </Container>
    </>
  )
}