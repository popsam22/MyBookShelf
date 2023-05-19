import React, {  useEffect, useContext } from "react";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";
import BooksContext from "./context/books";
 

const App = () => {
  const {getBooks} = useContext(BooksContext)

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <div>
      <h1>My Reading List</h1>
      <BookList />
      <CreateBook />
    </div>
  );
};

export default App;
