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

   :checked {
      background: black;
   }
`;

export const Label = styled.label`
  font-size: 12px;
  color: rgb(102, 102, 102);
  display: flex;
  cursor: pointer;
  width: 100%;
`;

export const TermsLabel = styled.label`
  text-align: center;
  font-size: 12px;
  color: rgb(102, 102, 102);
  cursor: pointer;
`;

