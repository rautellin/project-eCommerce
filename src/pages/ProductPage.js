import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const ProductPage = () => {
  const { id } = useParams()
  console.log(id)

  const [product, setProduct] = useState({})

  useEffect(() => {
    fetch(`https://rautellin-final-project-api.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setProduct(json)
      })
  }, [setProduct])

  return (
    <>
      product
      <h1>{product.title}</h1>
    </>
  )
}