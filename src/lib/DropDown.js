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
    <Select options={options} />
  )
}
