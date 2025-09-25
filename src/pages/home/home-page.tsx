import styles from "./home-page.module.css";
import { Header } from "../../components/UI/header/header";
import { BookCard } from "../../components/book-card/book-card";
import { BOOKS } from "../../components/book-details-button/book.data";
import { SearchInput } from "../../components/search-input/search-input";
import { useDebounce } from "../../hooks/useDebounce";
import { useCallback, useMemo } from "react";
import { useState } from "react";
import { AddBookButton } from "../../components/add-book-button/add-book-button";
import { Modal } from "../../components/UI/modal/modal";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm);

  const books = useMemo(() => {
    return BOOKS.filter((book) =>
      book.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch]);

  const [isOpenAddBook, setIsOpenAddBook] = useState(false);
  const openAddBook = useCallback(() => setIsOpenAddBook(true), []);
  const closeAddBook = useCallback(() => setIsOpenAddBook(false), []);

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Header />
        <div className={styles.header_container}>
          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <AddBookButton onClick={openAddBook} />
        </div>
        {isOpenAddBook && <Modal onClose={closeAddBook} />}
      </header>
      <main>
        {books.length ? (
          books.map((book) => (
            <BookCard key={book.title + book.id} image={book.cover} />
          ))
        ) : (
          <p className={styles.result_message}>Book is not found🕯️</p>
        )}
      </main>
    </div>
  );
}

export default App;
