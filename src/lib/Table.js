import styled from 'styled-components'

export const Table = styled.table`
width: 100%;
border-collapse: collapse;
border: 1px solid rgb(238, 238, 238);
`

export const TableHeader = styled.thead`
width: 100%;
background: rgb(238, 238, 238);
`

export const TableHeaders = styled.th`
font-family: 'Heebo', sans-serif;
font-size: 16px;
text-transform: uppercase;
font-weight: 300;
text-align: left;
width: ${(props) => props.width};
padding: 10px 0 10px 20px;
`

export const TableBorder = styled.td`
border: 1px solid rgb(238, 238, 238);
`

export const DetailsContainer = styled.div`
display: flex;
align-items: center;
padding: 10px 0 10px 20px;
`

export const SubtotalContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Image = styled.img`
width: 90px;
object-fit: contain;
margin-right: 20px;
`