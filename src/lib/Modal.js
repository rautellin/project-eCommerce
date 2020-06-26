import React from 'react'
import styled from 'styled-components'
import { Header } from './Text'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 10;
  display: none;
  justify-content: center;
  align-items: center;
  
  &&.show{
    display: flex;
  }
`

export const ModalContainer = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  min-height: 200px;
  background: white;
  position: relative;
  text-align: center;
`

export const Svg = styled.svg`
position: absolute;
top: 20px;
right: 20px;
cursor: pointer;
`

export const Modal = ({ text }) => {
  const closeModal = () => {
    const modal = document.getElementById('modal')
    modal.classList.remove('show')
  }

  return (
    <ModalOverlay id="modal" onClick={closeModal} onTouchStart={closeModal}>
      <ModalContainer>
        <Header>Thank you!</Header>
        {text}
        <Svg onClick={closeModal} onTouchStart={closeModal} height="25" width="25" viewBox="0 0 24 24"><path d="M5.3 5.957l.707-.707 12.728 12.728-.707.707L5.3 5.957z" /><path d="M6.007 18.685l-.707-.707L18.028 5.25l.707.707L6.007 18.685z" /></Svg>
      </ModalContainer>
    </ModalOverlay>
  )
}