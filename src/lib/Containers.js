import styled from 'styled-components'

export const FullPageContainer = styled.section`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const PageContainer = styled.section`
width: 100%;
max-width: 1200px;
min-height: 480px;
position: relative;

&&.flex {
  display: flex;
  justify-content: center;
}
`

export const CenterContainer = styled.section`
width: 100%;
max-width: 1200px;
min-height: 480px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: ${(props) => props.justifyContent};
`

export const Form = styled.form`
width: 45%;
position: relative;

:valid button {
      background: black;
      cursor: pointer;

      :hover {
        background: rgb(51, 51, 51);
      }
}
`

export const SectionImage = styled.img`
width: 45%;
position: absolute;
right: 0;
top: 0;
object-fit: cover;
height: 100%;
min-height: 480px;
`