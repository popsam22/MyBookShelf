import React, {useState} from 'react'
import useBooksContext from '../hooks/useBooksContext'

const EditBook = ({book, onSubmit}) => {
  const [bookName, setBookName] = useState(book.bookTitle)
  const {editBookById} = useBooksContext()

  const submitHandler = (e) => {
    e.preventDefault()
    onSubmit()
    editBookById(book.id, bookName)
  }

  const inputChangeHandler = (e) => {
    setBookName(e.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Enter New Title</label>
      <input onChange={inputChangeHandler} value={bookName}/> 
      <button>Save</button>
    </form>
  )
}

export default EditBook