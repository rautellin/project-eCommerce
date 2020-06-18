import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header, PageLinks } from '../lib/Text'

export const Section = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
grid-auto-rows: 500px;
width: 100%;
max-width: 1200px;
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
          <Product>
            <Header>{product.title}</Header>
            <Image src={product.imageUrl} alt="" />
            <PageLinks to={product._id}>{product.sizes.length} sizes</PageLinks>
            <p>{product.price}</p>
          </Product>
        ))}
      </Section>
    </>
  )
}