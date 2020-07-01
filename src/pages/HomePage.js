import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { SlideHeader, SlideText } from '../lib/Text'
import { SlideButton } from '../lib/Buttons'
import { ArrowDown } from '../lib/Icons'

export const HomePage = () => {
  const slides = useSelector((store) => store.ui.slides)

  const Slide = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.background};
    background-size: cover;
    background-position: center;
    position: relative;
  `

  const Video = styled.video`
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  `

  return (
    <>
      <Slide background={slides[0].image}>
        <SlideHeader color={slides[0].color}>{slides[0].header}</SlideHeader>
        <SlideText color={slides[0].color}>{slides[0].text}</SlideText>
        <NavLink to={slides[0].url}>
          <SlideButton color={slides[0].color}>View</SlideButton>
        </NavLink>
        <ArrowDown href="#slide2" />
      </Slide>
      <Slide id="slide2">
        <SlideHeader color={slides[1].color}>{slides[1].header}</SlideHeader>
        <SlideText color={slides[1].color}>{slides[1].text}</SlideText>
        <NavLink to={slides[1].url}>
          <SlideButton color={slides[1].color}>View</SlideButton>
        </NavLink>
        <Video poster="./videos/video.png" autoPlay muted loop>
          <source src="https://player.vimeo.com/external/353237048.hd.mp4?s=f782eb50065299b07e6b0f798811af74829d5524&amp;profile_id=172&amp;oauth2_token_id=57447761" type="video/mp4" />
        </Video>
        <ArrowDown href="#slide3" />
      </Slide>
      <Slide background={slides[2].image} id="slide3">
        <SlideHeader color={slides[2].color}>{slides[2].header}</SlideHeader>
        <SlideText color={slides[2].color}>{slides[2].text}</SlideText>
        <NavLink to={slides[2].url}>
          <SlideButton color={slides[2].color}>View</SlideButton>
        </NavLink>
        <ArrowDown href="#footer" />
      </Slide>
    </>
  )
}

