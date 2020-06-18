import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import { SubmitButton } from '../lib/Buttons'
import { Header, MediumHeader, SmallerHeader, Paragraph } from '../lib/Text'

export const Container = styled.section`
width: 100%;
max-width: 1200px;
max-height: 1000px;
height: 100vh;
display: flex;
padding-top: 114px;
`
export const Image = styled.img`
width: 50%;
height: 100%;
min-height: 480px;
object-fit: cover;
`
export const ProductDetails = styled.article`
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
padding: 60px 0 0 60px;
`

export const SizeContainer = styled.ul`
display: flex;
justify-content: space-between;
width: 100%;
`

export const Size = styled.li`
margin: 0 5px;
border: 1px solid rgb(242, 242, 242);
color: ${(props) => (props.color ? props.color : 'rgb(242, 242, 242)')};
text-align: center;
width: 100%;
`

export const ProductPage = () => {
  const { id } = useParams()
  console.log(id)

  const [product, setProduct] = useState({})
  const [sizes, setSizes] = useState([])
  const [availableSizes, setAvailableSizes] = useState([])

  useEffect(() => {
    fetch(`https://rautellin-final-project-api.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json)
        setSizes(json.sizes)
        setAvailableSizes(json.availableSizes)
      })
  }, [setProduct, setSizes, setAvailableSizes, id])

  const intersection = sizes.filter((item) => availableSizes.includes(item))
  console.log(intersection)

  return (
    <>
      <Container>
        <Image src={product.imageUrl} />
        <ProductDetails>
          <Header>{product.title}</Header>
          <MediumHeader>{product.price}.00 SEK</MediumHeader>
          <SmallerHeader>{product.color}</SmallerHeader>
          <Paragraph>{product.description}</Paragraph>
          {(sizes.length <= 1) ? <SmallerHeader>{sizes}</SmallerHeader> :
            <>
              <SmallerHeader>Select size</SmallerHeader>
              <SizeContainer>
                {sizes.map((size, index) => ((intersection.includes(size) ? <Size color="black" key={index}>{size}</Size>
                  : <Size key={index}>{size}</Size>
                )
                ))}
              </SizeContainer>
            </>}
          <SubmitButton background="black" position="none">Add</SubmitButton>
          <SmallerHeader>Reviews</SmallerHeader>
          <SmallerHeader>Delivery & returns</SmallerHeader>
        </ProductDetails>
      </Container>
    </>
  )
}