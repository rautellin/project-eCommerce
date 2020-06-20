import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import { Label, InputContainer, Input, TextArea, TextAreaLabel } from '../lib/Form'
import { Header, Text } from '../lib/Text'
import { SubmitButton, FileButton } from '../lib/Buttons'
import { PageContainer, Form, SectionImage } from '../lib/Containers'

export const AdminPage = () => {
  const categoryOptions = useSelector((store) => store.product.categories)
  const colorOptions = useSelector((store) => store.product.colors)
  const sizeOptions = useSelector((store) => store.product.sizes)
  const availableSizeOptions = useSelector((store) => store.product.availableSizes)

  const fileInput = useRef()
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [color, setColor] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [sizes, setSizes] = useState([sizeOptions[0].value, sizeOptions[1].value, sizeOptions[2].value, sizeOptions[3].value, sizeOptions[4].value])
  const [availableSizes, setAvailableSizes] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    fetch('https://rautellin-final-project-api.herokuapp.com/products', {
      method: 'POST',
      body: JSON.stringify({
        title,
        price,
        color,
        category,
        description,
        availableSizes,
        sizes
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then(({ _id }) => {
        const formData = new FormData()
        formData.append('image', fileInput.current.files[0])
        fetch(`https://rautellin-final-project-api.herokuapp.com/products/${_id}/image`, {
          method: 'POST',
          body: formData
        })
          .then((res) => res.json())
      })
      .then(() => {
        setTitle('')
        setPrice('')
        setColor('')
        setCategory('')
        setDescription('')
        setSizes([sizeOptions[0].value, sizeOptions[1].value, sizeOptions[2].value, sizeOptions[3].value, sizeOptions[4].value])
        setAvailableSizes('')
        document.getElementById('fileinput').value = ''
      })
      .catch((err) => console.log('error:', err))
  }

  const handleColor = (selectedColor) => {
    setColor(selectedColor.value)
  }

  const handleCategory = (selectedCategory) => {
    setCategory(selectedCategory.value)
  }

  const handleSizes = (selectedSizes) => {
    if (selectedSizes === null) {
      return
    } else {
      const values = selectedSizes.map((item) => {
        const { value } = item
        return value
      })
      setSizes(values)
    }
  }

  const handleAvailableSizes = (selectedAvailableSizes) => {
    if (selectedAvailableSizes === null) {
      return
    } else {
      const values = selectedAvailableSizes.map((item) => {
        const { value } = item
        return value
      })
      setAvailableSizes(values)
    }
  }

  return (
    <PageContainer>
      <Header>Add products</Header>
      <Text color="black">All fields are required in order to add a product.</Text>
      <Form onSubmit={submitHandler} id="form">

        <InputContainer>
          <Input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <Label>Title</Label>
        </InputContainer>

        <InputContainer>
          <Input
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
          <Label>Price (in SEK)</Label>
        </InputContainer>

        <InputContainer>
          <TextAreaLabel>Description</TextAreaLabel>
          <TextArea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </InputContainer>

        <Text margintop="10px">Category</Text>
        <Select
          required
          options={categoryOptions}
          value={(category === '') ? null : category.value}
          onChange={handleCategory}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: 'black'
            }
          })} />
        <Text margintop="10px">Color</Text>
        <Select
          required
          options={colorOptions}
          value={(color === '') ? null : color.value}
          onChange={handleColor}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: 'black'
            }
          })} />
        <Text margintop="10px">Sizes</Text>
        <Select
          required
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={sizeOptions}
          onChange={handleSizes}
          value={(sizes === [sizeOptions[0].value, sizeOptions[1].value, sizeOptions[2].value, sizeOptions[3].value, sizeOptions[4].value]) ? [sizeOptions[0], sizeOptions[1], sizeOptions[2], sizeOptions[3], sizeOptions[4]] : sizes.value}
          defaultValue={[sizeOptions[0], sizeOptions[1], sizeOptions[2], sizeOptions[3], sizeOptions[4]]}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: 'black'
            }
          })} />
        <Text margintop="10px">Available sizes</Text>
        <Select
          required
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={availableSizeOptions}
          value={(availableSizes === '') ? null : availableSizes.value}
          onChange={handleAvailableSizes}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: 'black'
            }
          })} />
        <FileButton
          required
          id="fileinput"
          type="file"
          ref={fileInput}
          margintop="20px"
          name="file"
          className="file-upload"
          data-cloudinary-field="image_id"
          data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
        />
        <SubmitButton type="submit" position="block" margintop="20px">Add</SubmitButton>

      </Form>
      <SectionImage src="/images/admin.jpg" />
    </PageContainer>
  )
}