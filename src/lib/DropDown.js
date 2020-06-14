import React from 'react'
import Select from 'react-select'

export const Colors = () => {
  const options = [
    { value: 'Beige', label: 'Beige' },
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Brown', label: 'Brown' },
    { value: 'Green', label: 'Green' },
    { value: 'Purple', label: 'Purple' },
    { value: 'Orange', label: 'Orange' },
    { value: 'Pink', label: 'Pink' },
    { value: 'Red', label: 'Red' },
    { value: 'White', label: 'White' },
    { value: 'Silver', label: 'Silver' },
    { value: 'Gold', label: 'Gold' },
    { value: 'Yellow', label: 'Yellow' },
    { value: 'Printed', label: 'Printed' }
  ]

  return (
    <Select options={options} theme={(theme) => ({ ...theme, borderRadius: 0 })} />
  )
}

export const Sizes = () => {
  const options = [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
    { value: '35', label: '35' },
    { value: '36', label: '36' },
    { value: '37', label: '37' },
    { value: '38', label: '38' },
    { value: '39', label: '39' },
    { value: '40', label: '40' },
    { value: '41', label: '41' },
    { value: '42', label: '42' },
    { value: 'One size', label: 'One size' }
  ]

  return (
    <Select
      isMulti
      name="colors"
      className="basic-multi-select"
      classNamePrefix="select"
      options={options}
      theme={(theme) => ({ ...theme, borderRadius: 0 })}
    />
  )
}
