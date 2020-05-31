import React from 'react'
import styled from 'styled-components'
import { Header } from '../lib/Text'

export const HomePage = () => {
  const Container = styled.main`
    height: 100vh;
    width: 100%;
    padding: 0 30px;
    background: pink;
  `

  return (
    <>
      <Container>
        <Header>
          Woman
      </Header>
      </Container>
    </>
  )
}