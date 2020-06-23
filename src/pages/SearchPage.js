import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Header, Text } from '../lib/Text'
import styled from 'styled-components'

export const SearchPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()
  const title = query.get('title')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (title === null) {
          const res = await fetch(`https://rautellin-final-project-api.herokuapp.com/products`)
          const json = await res.json()
          setProducts(json)
          setLoading(false)
        } else {
          const res = await fetch(`https://rautellin-final-project-api.herokuapp.com/products/?title=${title}`)
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
  }, [setProducts, setLoading, title])

  return (
    <>
      <Header>Search</Header>
      {(title === null) ? <Text>Search here</Text> : null}
    </>
  )
}