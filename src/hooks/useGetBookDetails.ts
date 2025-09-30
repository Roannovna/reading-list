import { useState } from "react";
import type { Book } from "../interfaces";

const booksKey = "books";

export const useGetBookDetails = () => {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getBookById = (id: number) => {
    setLoading(true);
    const books = localStorage.getItem(booksKey);
    const parsedBooks = books ? JSON.parse(books) : [];
    const book = parsedBooks.find((book: Book) => book.id === id);
    setBook(book);
    setLoading(false);
  };

  return { book, getBookById, loading };
}
