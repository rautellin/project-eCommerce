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
padding: 10px 0 10px 20px;
`

export const DetailsContainer = styled.div`
display: flex;
align-items: center;
`

export const Image = styled.img`
width: 90px;
object-fit: cover;
margin-right: 20px;
`