import React from 'react'

export const NewsletterForm = () => {
  const handleSubmit = () => {
    console.log('hello')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="lname" name="lname" value="Doe" />
      <input type="submit" value="Submit" />
    </form>
  )
}