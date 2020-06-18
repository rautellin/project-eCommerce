import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Header, SmallerHeader } from '../lib/Text'

export const Section = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
grid-auto-rows: 500px;
width: 100%;
max-width: 1200px;
padding-top: 114px;
height: 100vh;
`

export const Product = styled.div`
width: 100%;
`

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`

export const ProductsPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://rautellin-final-project-api.herokuapp.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json)
      })
  }, [setProducts])

  return (
    <>
      <Section>
        {products.map((product, index) => (
          <Product key={index}>
            <NavLink to={`/product/${product._id}`}><Header>{product.title}</Header></NavLink>
            <NavLink to={`/product/${product._id}`}><Image src={product.imageUrl} alt="" /></NavLink>
            <SmallerHeader>{product.availableSizes.length} available sizes</SmallerHeader>
            <p>{product.price} SEK</p>
          </Product>
        ))}
      </Section>
    </>
  )
}