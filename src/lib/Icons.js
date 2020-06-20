import React from 'react'
import styled from 'styled-components'

export const ArrowDown = (props) => {
  const Down = styled.a`
    position: absolute;
    bottom: 30px;
  `

  return (
    <Down href={props.href}>
      <svg height="25" width="25" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" /></g></svg>
    </Down>
  )
}

export const CloseButton = () => {
  const hideNav = () => {
    const navigation = document.getElementById('navigation')
    const help = document.getElementById('help')
    navigation.classList.remove('show')
    help.classList.remove('show')
  }

  const Svg = styled.svg`
    position: absolute;
    top: 30px;
    left: 30px;
    cursor: pointer;
  `

  return (
    <Svg onClick={hideNav} onTouchStart={hideNav} id="closebutton" height="25" width="25" viewBox="0 0 24 24"><path d="M5.3 5.957l.707-.707 12.728 12.728-.707.707L5.3 5.957z" /><path d="M6.007 18.685l-.707-.707L18.028 5.25l.707.707L6.007 18.685z" /></Svg>
  )
}