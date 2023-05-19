import React, {useState} from 'react'
import EditBook from './EditBook'
import useBooksContext from '../hooks/useBooksContext'

const Book = ({ book }) => {
    const [showEdit, setShowEdit] = useState(false)
    const {deleteBookById} = useBooksContext()

    const deleteButtonHandler = () => { 
        deleteBookById(book.id)
    }

    const editButtonHandler = () => {
        setShowEdit(!showEdit)
    }
    const submitHandler = () => {
        setShowEdit(false)
    }

  return ( 
    <div>
        <div>
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books'/>
        {showEdit ? <EditBook onSubmit={submitHandler} book={book}/> :<h3>{book.bookTitle}</h3>  }
        </div>
       <div>
        <button onClick={editButtonHandler}>Edit Book</button>
       <button onClick={deleteButtonHandler}>Delete Book</button>
       </div>
    </div>
  )
}

export default Book