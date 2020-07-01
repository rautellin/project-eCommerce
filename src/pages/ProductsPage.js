import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Filter } from '../components/Filter'
import { Header, SmallerHeader } from '../lib/Text'

export const Section = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
grid-gap: 10px;
grid-auto-rows: minmax(1fr, 800px);
width: 100%;
max-width: 1200px;
padding-top: 144px;
height: 100vh;

@media screen and (max-width: 500px){
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(1fr, 500px);
  }
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

export const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const location = useLocation()
  const path = location.pathname

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()
  const category = query.get('category')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (category === null) {
          const res = await fetch(`https://rautellin-final-project-api.herokuapp.com${path}`)
          const json = await res.json()
          setProducts(json)
          setLoading(false)
        } else {
          const res = await fetch(`https://rautellin-final-project-api.herokuapp.com${path}/?category=${category}`)
          const json = await res.json()
          setProducts(json)
          setLoading(false)
        }
      } catch (err) {
        setLoading(false)
        setError(true)
      }
    }
    fetchProducts()
  }, [setProducts, setLoading, category, path])

  return (
    <>
      {error && <><Header>Oh no!</Header><SmallerHeader>There&apos;s currently no connection to the server.</SmallerHeader></>}
      {loading ? <Header>Loading products, please wait...</Header>
        :
        (products.length === 0) ?
          <>
            <Filter />
            <Header>No products found</Header>
          </>
          :
          <Section>
            <Filter />
            {products.map((product, index) => (
              <Product key={index}>
                <NavLink to={`/product/${product._id}`}><Image src={product.imageUrl} alt="" /></NavLink>
                <ProductDetail>
                  <NavLink to={`/product/${product._id}`}><Header>{product.title}</Header></NavLink>
                  <SmallerHeader>{product.color} - {product.availableSizes.length} available sizes</SmallerHeader>
                  <p>{product.price}.00 SEK</p>
                </ProductDetail>
              </Product>))}
          </Section>
      }
    </>
  )
}