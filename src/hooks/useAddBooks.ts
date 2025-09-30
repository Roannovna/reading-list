import type { Book } from "../interfaces";

const booksKey = "books";

export const useAddBooks = () => {

  const addBook = (newBook: Book) => {
    const prev = localStorage.getItem(booksKey);
    const books = prev ? JSON.parse(prev) : [];
    books.push(newBook);
    localStorage.setItem(booksKey, JSON.stringify(books));
  };


  return { addBook };
};