import React, { useState } from 'react'

export const HelpPage = () => {
  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    const API_URL = 'http://rautellin-final-project-api.herokuapp.com/test'
    e.preventDefault()

    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        title
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then(() => {
        setTitle('')
      })
      .catch((err) => console.log("error:", err))
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          Title:
            <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <button type="submit">
          Add your Plant
        </button>

      </form>
    </>
  )
}