import { useState } from "react";
import type { Book } from "../interfaces";

const booksKey = "books";

export const useGetBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const getAllBooks = () => {
    const books = localStorage.getItem(booksKey);
    const parsedBooks = books ? JSON.parse(books) : [];
    setBooks(parsedBooks);
  };

  return { books, getAllBooks };
};