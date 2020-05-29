import React from 'react'
import styled from 'styled-components'
import { Links } from '../../lib/Text'

export const Terms = () => {
  const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 20px;
  `

  return (
    <Container>
      <Links href="/" margin="0 5px" target="_blank">Privacy Policy</Links> | <Links href="/" margin="0 5px" target="_blank">Terms of use</Links>
    </Container>
  )
}