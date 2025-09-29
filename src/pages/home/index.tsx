import styles from "./home-page.module.css";
import { Header } from "../../components/UI/header/index";
import { BookCard } from "../../components/book-card/index";
import { BOOKS } from "../../components/book-details-button/book.data";
import { SearchInput } from "../../components/search-input/index";
import { useDebounce } from "../../hooks/useDebounce";
import { useCallback, useMemo } from "react";
import { useState } from "react";
import { AddBookButton } from "../../components/add-book-button/index";
import { Modal } from "../../components/UI/modal/index";

function HomePage() {
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
            <BookCard key={book.title + book.id} book={book} />
          ))
        ) : (
          <p className={styles.result_message}>Book is not found🕯️</p>
        )}
      </main>
    </div>
  );
}

export default HomePage;
