// import React, { useState, useRef } from 'react'
// import { useDispatch } from 'react-redux'
// import { product } from '../reducers/product'

// export const SearchPage = () => {
//   const fileInput = useRef()
//   const [title, setTitle] = useState('')
//   const [price, setPrice] = useState(null)
//   const [color, setColor] = useState('')
//   const [category, setCategory] = useState('')
//   const [description, setDescription] = useState('')
//   const [sizes, setSizes] = useState(null)
//   const dispatch = useDispatch()

//   const submitHandler = (e) => {
//     const API_URL = 'http://rautellin-final-project-api.herokuapp.com/products'
//     e.preventDefault()
//     fetch(API_URL, {
//       method: 'POST',
//       body: JSON.stringify({
//         title,
//         price,
//         color,
//         category,
//         description,
//         sizes
//       }),
//       headers: { 'Content-Type': 'application/json' }
//     })
//       .then((res) => res.json())
//       .then((json) => console.log(json))
//       .catch((err) => console.log("error:", err))
//   }
//   return (
//     <>
//       <form>
//         <label>
//           Title:
//             <input
//             type="text"
//             value={title}
//             onChange={(event) => setTitle(event.target.value)}
//           />
//         </label>
//         <label>
//           Description
//             <input
//             type="text-area"
//             value={description}
//             onChange={(event) => setDescription(event.target.value)}
//           />
//         </label>
//         <label>
//           Image of your Green
//         <input type="file" ref={fileInput} />
//         </label>
//         <button type="submit" onClick={submitHandler}>
//           Add your Plant
//         </button>

//       </form>

//     </>
//   )
// }