import React, { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

const CreateBook = () => {
  const [bookTitle, setBookTitle] = useState("");
  const {createBook} = useBooksContext()
  const userInputHandler = (e) => {
    setBookTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createBook(bookTitle);
    setBookTitle('')
  }

  return (
    <div>
      <h3>Add a Book</h3>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input onChange={userInputHandler} value={bookTitle} />
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default CreateBook;
