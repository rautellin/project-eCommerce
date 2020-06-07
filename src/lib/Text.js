import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const SectionHeader = styled.h2`
  font-family: 'Heebo', sans-serif;
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: -2px;
  font-weight: 500;
`

export const Header = styled.h3`
  font-family: 'Heebo', sans-serif;
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: -2px;
  font-weight: 500;
  margin: ${(props) => props.margin};
`

export const Paragraph = styled.p`
  margin-bottom: 16px;
  text-align: justify;
`

export const Required = styled.p`
  margin-top: 9px;
  font-size: 12px;
`

// SLIDES

export const SlideHeader = styled.h1`
  font-family: 'Heebo', sans-serif;
  font-size: 94px;
  text-transform: uppercase;
  letter-spacing: -7px;
  margin-bottom: -27px;
`

export const SlideText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Heebo', sans-serif;
  font-size: 14px;
  text-align: center;
  max-width: 50%;
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

export const NavigationLinks = styled(NavLink)`
  font-family: 'Heebo', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 500;
  padding-right: 10px;
`

export const SearchLine = styled(NavLink)`
  border-bottom: 1px solid black;
  width: 147px;
  height: 18px;
`

export const FooterLink = styled.a`
  text-decoration: underline;
`