import { Header } from "../../components/UI/header/header";
import { BookCard } from "../../components/book-card/book-card";
import { BOOKS } from "../../components/book-details-button/book.data";
import styles from "./home-page.module.css";

function App() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Header />
      </header>
      <main>
        {BOOKS.map((book) => (
          <BookCard key={book.title + book.id} image={book.cover} />
        ))}
      </main>
    </div>
  );
}

export default App;
