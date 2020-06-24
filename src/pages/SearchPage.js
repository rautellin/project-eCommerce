/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Header, Text, SmallerHeader } from '../lib/Text'

export const Form = styled.form`
  width: 100%;
  max-width: 1200px;
  position: fixed;
  top: 114px;
`

export const Input = styled.input`
   all: unset;
   width: 100%;
   border-bottom: 2px solid black;
   cursor: pointer;
   font-size: 32px;
   text-transform: uppercase;
   font-weight: 500;
`

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 10px;
  grid-auto-rows: minmax(1fr, 800px);
  width: 100%;
  max-width: 1200px;
  padding-top: 194px;
  height: 100vh;
`

export const Product = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ProductDetail = styled.div`
  width: 100%;
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`

export const SearchPage = () => {
  const [products, setProducts] = useState([])
  const [title, setTitle] = useState('')
  console.log(products)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (title === '') {
          const res = await fetch('https://rautellin-final-project-api.herokuapp.com/products')
          const json = await res.json()
          setProducts(json)
        } else {
          const res = await fetch(`https://rautellin-final-project-api.herokuapp.com/products/?title=${title}`)
          const json = await res.json()
          setProducts(json)
        }
      } catch (err) {
        console.log('error')
      }
    }
    fetchProducts()
  }, [setProducts, title])

  return (
    <>
      <Form>
        <Input
          type="text"
          value={title}
          placeholder="search here"
          onChange={(event) => setTitle(event.target.value)}
        />
      </Form>
      {(title === null) ? <Text>Search here</Text> : null}
      <Section>
        {products.map((product, index) => (
          <Product key={index}>
            <NavLink to={`/product/${product._id}`}><Image src={product.imageUrl} alt="" /></NavLink>
            <ProductDetail>
              <NavLink to={`/product/${product._id}`}><Header>{product.title}</Header></NavLink>
              <SmallerHeader>{product.color} - {product.availableSizes.length} available sizes</SmallerHeader>
              <p>{product.price}.00 SEK</p>
            </ProductDetail>
          </Product>
        ))}
      </Section>
    </>
  )
}