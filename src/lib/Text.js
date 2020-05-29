import styled from 'styled-components'

export const Logo = styled.h1`
  font-family: 'Vidaloka', serif;
  font-size: 72px;
  font-weight: lighter;
`

export const Header = styled.h1`
  font-family: 'Heebo', sans-serif;
  font-size: 94px;
  text-transform: uppercase;
  letter-spacing: -7px;
`

export const SectionHeader = styled.h2`
  font-family: 'Heebo', sans-serif;
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: -2px;
  font-weight: 500;
`

export const Links = styled.a`
  font-family: 'Heebo', sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 300;
  color: black;
  margin: ${(props) => props.margin};
`