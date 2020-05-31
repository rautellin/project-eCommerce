import React from 'react'
import styled from 'styled-components'
import { SlideHeader, SlideText } from '../lib/Text'
import { SlideButton } from '../lib/Buttons'
import { ArrowDown } from '../lib/Icons'

export const HomePage = () => {
  const Slide = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.background};
    background-size: cover;
    position: relative;
  `

  // const Video = styled.video`
  //   position: absolute;
  //   z-index: -1;
  //   width: 100vw;
  // `

  return (
    <>
      <Slide background="url(./images/page1.jpg)">
        <SlideHeader>Collection</SlideHeader>
        <SlideText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi illo magni veritatis aliquam odio earum quas similique vel. Reiciendis a earum voluptate ea omnis voluptates impedit, voluptatibus eaque itaque nemo?</SlideText>
        <SlideButton>View</SlideButton>
        <ArrowDown />
      </Slide>
      {/* <Slide>
        <SlideHeader>Collection</SlideHeader>
        <SlideText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi illo magni veritatis aliquam odio earum quas similique vel. Reiciendis a earum voluptate ea omnis voluptates impedit, voluptatibus eaque itaque nemo?</SlideText>
        <SlideButton>View</SlideButton>
        <Video poster="./videos/video1.png" autoPlay muted loop>
          <source src="./videos/video1.mp4" type="video/mp4" />
        </Video>
        <ArrowDown />
      </Slide> */}
      <Slide background="url(./images/page2.jpg)">
        <SlideHeader>Collection</SlideHeader>
        <SlideText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi illo magni veritatis aliquam odio earum quas similique vel. Reiciendis a earum voluptate ea omnis voluptates impedit, voluptatibus eaque itaque nemo?</SlideText>
        <SlideButton>View</SlideButton>
        <ArrowDown />
      </Slide>
    </>
  )
}