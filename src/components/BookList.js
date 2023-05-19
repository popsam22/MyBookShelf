import React from "react";
import Book from "./Book";
import useBooksContext from "../hooks/useBooksContext";

const BookList = () => {
  const {books} = useBooksContext()
  const receivedBooks = books.map((book) => {
    return (
      <Book
        key={book.id}
        book={book}
      />
    );
  });

  return (
    <div>
      {receivedBooks}
    </div>
  );
};

export default BookList;
