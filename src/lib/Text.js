import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Header = styled.h3`
  font-family: 'Heebo', sans-serif;
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: -2px;
  font-weight: 500;
  margin: ${(props) => props.margin};
`

export const MediumHeader = styled.h4`
  font-family: 'Heebo', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: ${(props) => (props.fontweight ? props.fontweight : '300')};
  margin: ${(props) => props.margin};
`

export const SmallerHeader = styled.h5`
  font-family: 'Heebo', sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 300;
  margin: ${(props) => props.margin};
`

export const CartDetail = styled.p`
   font-size: 14px;
   color: ${(props) => (props.color ? props.color : 'black')};
   margin-top: ${(props) => (props.margintop)};
`;

export const Text = styled.p`
   font-size: ${(props) => (props.fontsize ? props.fontsize : '16px')};
   color: ${(props) => (props.color ? props.color : 'rgb(204, 204, 204)')};
   margin-top: ${(props) => (props.margintop)};
`;

export const Paragraph = styled.p`
  margin-bottom: 16px;
  text-align: justify;
`

export const SlideHeader = styled.h1`
  font-family: 'Heebo', sans-serif;
  font-size: 94px;
  text-transform: uppercase;
  letter-spacing: -7px;
  margin-bottom: -27px;
  color: ${(props) => props.color};
`

export const SlideText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Heebo', sans-serif;
  font-size: 14px;
  text-align: center;
  max-width: 50%;
  color: ${(props) => props.color};
  text-shadow:0px 0px 10px rgb(0,0,0,0.5);
`

// LINKS

export const ExternalLinks = styled.a`
  font-family: 'Heebo', sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 300;
  margin: ${(props) => props.margin};
`

export const PageLinks = styled(NavLink)`
  font-family: 'Heebo', sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 300;
  margin: ${(props) => props.margin};
`

export const FooterLink = styled.a`
  text-decoration: underline;
`

export const NavigationLinks = styled(NavLink)`
font-family: 'Heebo', sans-serif;
font-size: ${(props) => (props.size ? props.size : '15px')};
text-transform: uppercase;
font-weight: ${(props) => (props.weight ? props.weight : '300')};
`

export const NavLinks = ({ url, text, size, weight }) => {
  const closeNav = () => {
    const navigation = document.getElementById('navigation')
    const help = document.getElementById('help')
    const clothes = document.getElementById('clothes')
    const accessories = document.getElementById('accessories')
    navigation.classList.remove('show')
    help.classList.remove('show')
    clothes.classList.remove('show')
    accessories.classList.remove('show')
  }

  return (
    <NavigationLinks size={size} weight={weight} onClick={closeNav} onTouchStart={closeNav} to={`/products${url}`}>{text}</NavigationLinks>
  )
}