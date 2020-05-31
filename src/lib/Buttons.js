import styled from 'styled-components'

export const Button = styled.button`
   all: unset;
   height: 35px;
   text-align: center;
   text-transform: uppercase;
   font-family: 'Heebo', sans-serif;
   font-weight: 500;
   font-size: 15px;
   border: 1px solid black;
   border-width: ${(props) => props.borderWidth};
   width: ${(props) => props.borderWidth};
   padding: 0 17px;
`;

export const SlideButton = styled.button`
   all: unset;
   height: 35px;
   text-align: center;
   text-transform: uppercase;
   font-family: 'Heebo', sans-serif;
   font-weight: 500;
   font-size: 15px;
   border: 2px solid black;
   padding: 0 40px;
   margin-top: 10px;
   cursor: pointer;
`;

export const NavButton = styled.button`
   all: unset;
   text-transform: uppercase;
   font-family: 'Heebo', sans-serif;
   font-weight: 500;
   font-size: 40px;
   letter-spacing: -4px;
   cursor: pointer;
   margin-bottom: -27px;
`;