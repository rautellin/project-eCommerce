import React from 'react'
import styled from 'styled-components'
import { NavigationLinks } from '../lib/Text'

// Not needed
export const Arrows = () => {
  const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  width: 100vw;
  display: flex;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  `

  const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  `

  return (
    <Container>
      <ArrowContainer>
        <NavigationLinks to="/">Left</NavigationLinks>
        <svg version="1.1" width="25" height="25" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 129 129"><g><path d="M94.3,121.3c1.6-1.6,1.6-4.2,0-5.8l-51.1-51l51.1-51.1c1.6-1.6,1.6-4.2,0-5.8s-4.2-1.6-5.8,0L34.6,61.5c-0.8,0.8-1.2,1.8-1.2,2.9c0,1,0.4,2.1,1.2,2.9l53.9,53.9C90.1,122.9,92.7,122.9,94.3,121.3z" /></g></svg>
      </ArrowContainer>
      <ArrowContainer>
        <svg width="25" height="25" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 129 129"><g><path d="M34.6,7.6c-1.6,1.6-1.6,4.2,0,5.8l51.1,51l-51.1,51.1c-1.6,1.6-1.6,4.2,0,5.8s4.2,1.6,5.8,0l53.9-53.9c0.8-0.8,1.2-1.8,1.2-2.9c0-1-0.4-2.1-1.2-2.9L40.4,7.7C38.8,6,36.2,6,34.6,7.6z" /></g></svg>
        <NavigationLinks to="/">Right</NavigationLinks>
      </ArrowContainer>
    </Container>
  )
}