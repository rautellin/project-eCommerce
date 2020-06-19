import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Filter } from '../components/Filter'
import { Header, SmallerHeader } from '../lib/Text'

export const Section = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
grid-auto-rows: 500px;
width: 100%;
max-width: 1200px;
padding-top: 144px;
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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://rautellin-final-project-api.herokuapp.com/products')
        const json = await res.json()
        setProducts(json)
        setLoading(false)
      } catch (err) {
        setLoading(false)
        setError(true)
        console.log(err)
      }
    }
    fetchProducts()
  }, [setProducts, setLoading])

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery()
  const filter = query.get('filter')
  console.log(filter)

  return (
    <>
      {error && <><Header>Oh no!</Header><SmallerHeader>There&apos;s currently no connection to the server.</SmallerHeader></>}
      {loading ? <Header>Loading products, please wait...</Header>
        : <Section>
          <Filter />
          {products.map((product, index) => (
            <Product key={index}>
              <NavLink to={`/product/${product._id}`}><Header>{product.title}</Header></NavLink>
              <NavLink to={`/product/${product._id}`}><Image src={product.imageUrl} alt="" /></NavLink>
              <SmallerHeader>{product.availableSizes.length} available sizes</SmallerHeader>
              <p>{product.price} SEK</p>
            </Product>
          ))}
        </Section>}
    </>
  )
}