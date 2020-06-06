import styled from 'styled-components'

export const TextInput = styled.input`
   all: unset;
   border-bottom: solid black 1px;
   padding-bottom: 10px;
   text-align: center;
   width: 350px;
   text-transform: none;
`;

export const Checkbox = styled.input`
   all: unset;
   width: 14px;
   height: 14px;
   border: 1px solid black;
   cursor: pointer;
   margin-right: 10px;

   :checked {
      background: url(./images/check.svg);
      background-size: cover;
   }
`;

export const Label = styled.label`
  font-size: 14px;
  color: black;
  display: flex;
  cursor: pointer;
  width: 100%;
  margin-bottom: 5px;
`;

export const TermsLabel = styled.label`
  text-align: center;
  font-size: 12px;
  color: rgb(102, 102, 102);
  cursor: pointer;
  width: 100%;
  flex: 1;
`;

//LOGIN

export const LoginInput = styled.input`
   all: unset;
   width: 100%;
   text-transform: none;
   padding-bottom: 5px;

   :focus + label{
      bottom: 30px;
   }
`;

export const LoginLabel = styled.label`
   font-size: 14px;
   color: rgb(204, 204, 204);
   position: absolute;
   left: 0;
   bottom: 4px;
   -webkit-transition: bottom 0.3s;
    -moz-transition: bottom 0.3s;
    -o-transition: bottom 0.3s;
    transition: bottom 0.3s;
`;
