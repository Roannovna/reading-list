import { useCallback, useState } from "react";
import type { Book } from "../interfaces";

const booksKey = "books";

export const useGetBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const getAllBooks = useCallback((search: string) => {
    const books = localStorage.getItem(booksKey);
    const parsedBooks = books ? JSON.parse(books) : [];
    const filtered = parsedBooks.filter((book: Book) => book.title.toLowerCase().includes(search.toLowerCase()));
    setBooks(filtered);
  }, []);

  return { books, getAllBooks };
};