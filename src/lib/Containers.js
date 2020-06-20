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

export const Table = styled.table`
width: 100%;
border-collapse: collapse;
border: 1px solid rgb(238, 238, 238);
`

export const TableTop = styled.tr`
width: 100%;
background: rgb(238, 238, 238);
`

export const TableBorder = styled.td`
border: 1px solid rgb(238, 238, 238);
padding: 10px 0 10px 20px;
`