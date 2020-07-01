import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useParams } from 'react-router'
import { cart } from '../reducers/cart'
import { SubmitButton } from '../lib/Buttons'
import { Header, MediumHeader, SmallerHeader, Paragraph } from '../lib/Text'
import { ArrowLeft } from '../lib/Arrows'

export const Container = styled.section`
width: 100%;
max-width: 1200px;
max-height: 1000px;
height: 100vh;
display: flex;
padding-top: 114px;

@media screen and (max-width: 500px){
  display: block;
  }
`

export const ErrorContainer = styled.section`
display: flex;
flex-direction: column;
`

export const Image = styled.img`
width: 50%;
height: 100%;
min-height: 480px;
object-fit: cover;

@media screen and (max-width: 500px){
  width: 100%;
  height: 70%;
  min-height: 480px;
  }
`
export const ProductDetails = styled.article`
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
padding: 40px 0 0 60px;

@media screen and (max-width: 500px){
  width: 100%;
  padding: 40px 10px 0 10px;
  }
`

export const SizeContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin: 5px 0 10px 0;
`
export const Size = styled.button`
margin: 0 5px;
border: 1px solid rgb(242, 242, 242);
background: white;
padding: 5px 0;
color: ${(props) => (props.color ? props.color : 'rgb(242, 242, 242)')};
text-align: center;
width: 100%;
text-transform: uppercase;

:enabled {
  cursor: pointer;
}

:enabled:hover {
  background: black;
  color: white;
}
`

export const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [sizes, setSizes] = useState([])
  const [availableSizes, setAvailableSizes] = useState([])
  const [selectedSize, setSelectedSize] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://rautellin-final-project-api.herokuapp.com/product/${id}`)
        const json = await res.json()
        setProduct(json)
        setSizes(json.sizes)
        setAvailableSizes(json.availableSizes)
        setLoading(false)
      } catch (err) {
        setError(true)
        setLoading(false)
      }
    }
    fetchProduct()
  }, [setProduct, setSizes, setAvailableSizes, id])

  const intersection = sizes.filter((item) => availableSizes.includes(item))

  const onClick = (event) => {
    event.target.style.color = 'white'
    event.target.style.background = 'black'
    setSelectedSize(event.target.value)
    return selectedSize
  }

  const disabled = selectedSize === ''

  // Add to cart
  const dispatch = useDispatch()
  const addToCart = (event) => {
    event.preventDefault()
    const { title, price, color, imageUrl } = product
    dispatch(cart.actions.addItem({ title, price, color, imageUrl, id, selectedSize }))

    fetch('https://rautellin-final-project-api.herokuapp.com/cart', {
      method: 'POST',
      body: JSON.stringify({
        id,
        title,
        price,
        color,
        selectedSize,
        imageUrl
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then(() => {
        const carticon = document.getElementById('cart')
        const overlay = document.getElementById('overlay')
        carticon.classList.add('show')
        overlay.classList.add('show')
      })
      .catch((err) => console.log('error:', err))
  }

  return (
    <>
      {error &&
        <ErrorContainer>
          <Header>Could not find product</Header>
          <ArrowLeft justify="center" />
        </ErrorContainer>}
      {loading && <Header>Please wait...</Header>}
      {!error && !loading &&
        <Container>
          <Image src={product.imageUrl} />
          <ProductDetails>
            <ArrowLeft marginleft="-25px" />
            <Header>{product.title}</Header>
            <MediumHeader fontweight="500">{product.price} SEK</MediumHeader>
            <SmallerHeader>{product.color}</SmallerHeader>
            <Paragraph>{product.description}</Paragraph>
            <SmallerHeader>Select size</SmallerHeader>
            {(sizes.length <= 1) ? <SizeContainer><Size onClick={onClick} value={sizes[0]} margin="0 0 5px 0" color="black">{sizes}</Size></SizeContainer> :
              <>
                <SizeContainer>
                  {sizes.map((size, index) => ((intersection.includes(size) ? <Size color="black" key={index} onClick={onClick} value={size}>{size}</Size>
                    : <Size key={index} disabled>{size}</Size>
                  )
                  ))}
                </SizeContainer>
              </>}
            <SubmitButton disabled={disabled} background="black" position="none" onClick={addToCart}>Add to cart</SubmitButton>
            <SmallerHeader margin="10px 0 5px 0">Reviews</SmallerHeader>
            <SmallerHeader>Delivery & returns</SmallerHeader>
          </ProductDetails>
        </Container>}
    </>
  )
}