import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext()

const Provider = ({children}) => {
    const [books, setBooks] = useState([]);

  const getBooks = useCallback( async () => {
    const result = await axios.get("http://localhost:3001/books");
    setBooks(result.data);
  }, []);

  const createBook = async (bookTitle) => {
    const result = await axios.post("http://localhost:3001/books", {
      bookTitle,
    });

    const allBooks = [...books, result.data];

    setBooks(allBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const allBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(allBooks);
  };

  const editBookById = async (id, newTitle) => {
    const result = await axios.patch(`http://localhost:3001/books/${id}`, {
      bookTitle: newTitle
    })

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...result.data };
      }

      return book;
    });
    setBooks(updatedBooks);
    console.log(books);
  };

  const values = {
    books,
    getBooks,
    createBook,
    editBookById,
    deleteBookById
  }

    return <BooksContext.Provider value={values}>
        {children}
    </BooksContext.Provider>
}

export {Provider}
export default BooksContext