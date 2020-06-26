import React from 'react'
import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  background: yellow;
`

export const Modal = () => {
  return (
    <ModalContainer id="modal">
      Close
    </ModalContainer>
  )
}