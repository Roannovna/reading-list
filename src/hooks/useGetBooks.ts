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

  const updateStatus = useCallback((id: number, status: boolean) => {
    const books = localStorage.getItem(booksKey);
    const parsedBooks: Book[] = books ? JSON.parse(books) : [];
    
    const index = parsedBooks.indexOf(parsedBooks.find((book: Book) => book.id === id)!);
    parsedBooks[index].isReaded = status;
    localStorage.setItem(booksKey, JSON.stringify(parsedBooks));

    getAllBooks("");
  }, []);

  return { books, getAllBooks, updateStatus};
};