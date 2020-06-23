import styled from 'styled-components'

export const SlideButton = styled.button`
   all: unset;
   height: 35px;
   text-align: center;
   text-transform: uppercase;
   font-family: 'Heebo', sans-serif;
   font-weight: 500;
   font-size: 15px;
   border: 2px solid black;
   border-color: ${(props) => props.color};
   color: ${(props) => props.color};
   padding: 0 40px;
   margin-top: 10px;
   cursor: pointer;
`;

export const SubscribeButton = styled.button`
   all: unset;
   font-size: 15px;
   height: 35px;
   text-transform: uppercase;
   font-weight: 300;
   color: white;
   background: rgb(51, 51, 51);
   text-align: center;
   padding: 11px 0;
   font-size: 18px;
   font-weight: 500;
   letter-spacing: -1px;
   margin-top: 10px;
   padding: 0 40px;
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
   margin: ${(props) => props.margin};
`;

export const SmallNavButton = styled.button`
   all: unset;
   font-family: 'Heebo', sans-serif;
   font-size: 15px;
   text-transform: uppercase;
   font-weight: 300;
`;

export const SubmitButton = styled.button`
   all: unset;
   font-size: 15px;
   text-transform: uppercase;
   font-weight: 300;
   color: white;
   background: ${(props) => (props.background ? props.background : 'rgb(51, 51, 51)')};
   width: ${(props) => (props.width ? props.width : '100%')};
   text-align: center;
   padding: 11px 0;
   font-size: 18px;
   font-weight: 500;
   letter-spacing: -1px;
   position: ${(props) => (props.position ? props.position : 'absolute')};
   bottom: 20px;
   margin-top: ${(props) => (props.margintop)};

   :enabled {
      background: ${(props) => (props.background ? props.background : 'black')};
      cursor: pointer;
   }

   :enabled:hover {
      background: ${(props) => (props.hover ? props.hover : 'rgb(51, 51, 51)')};
   }
`;

export const FileButton = styled.input`
   font-size: 16px;
   color: black;
   width: ${(props) => (props.width ? props.width : '100%')};
   font-weight: 300;
   margin-top: ${(props) => (props.margintop)};
`;
