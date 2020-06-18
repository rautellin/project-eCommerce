import styled from 'styled-components'

// GENERAL INPUT

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

   :checked ~label {
      color: black;
   }
`;

export const InputLabel = styled.label`
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

// CONTAINER

export const InputContainer = styled.div`
position: relative;
margin-top:30px;
`

// TEXT

export const Label = styled.label`
   font-size: ${(props) => (props.filled ? '14px' : '16px')};
   color: rgb(204, 204, 204);
   position: absolute;
   left: 0;
   text-transform: none;
   font-family: 'Heebo', sans-serif;
   bottom: ${(props) => (props.filled ? '30px' : '4px')};
   -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
`;

export const TextAreaLabel = styled.label`
   font-size: ${(props) => (props.filled ? '14px' : '16px')};
   color: rgb(204, 204, 204);
`;

export const InputDescription = styled.p`
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

export const Required = styled.p`
  margin-top: 9px;
  font-size: 12px;
  color: ${(props) => (props.filled ? 'transparent' : 'red')};
`

// INPUT

export const Input = styled.input`
all: unset;
width: ${(props) => (props.width ? props.width : '100%')};
text-transform: none;
padding-bottom: 5px;
border-bottom: 1px solid rgb(204, 204, 204);

:focus {
   border-bottom: 1px solid black;
}

:focus + label {
   bottom: 30px;
   font-size: 14px;
}

:valid + label {
   bottom: 30px;
   font-size: 14px;
}
`;

export const TextArea = styled.textarea`
all: unset;
width: 100%;
text-transform: none;
border: 1px solid rgb(204, 204, 204);
margin-top: 3px;

:focus {
   border: 1px solid black;
}
`;