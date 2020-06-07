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

export const CheckboxLabel = styled.label`
  text-align: ${(props) => props.align};
  font-size: 12px;
  color: ${(props) => (props.color ? props.color : 'rgb(102, 102, 102)')};
  cursor: pointer;
  width: 100%;
  flex: 1;
`;
