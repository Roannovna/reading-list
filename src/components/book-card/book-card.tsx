import { StatusButton } from "../status-button/status-button";
import styles from "./book-card.module.css";
// import { BookDetailsButton } from "../book-details-button/book-details-button";

export function BookCard({ image }: { image: string }) {
  // const [isOpenDetails, setIsOpenDetails] = useState(false);

  return (
    <div className={styles.container}>
      <img src={image} className={styles.card} />
      <div className={styles.card_button}>
        <StatusButton />
      </div>
      {/* <div>
        <BookDetailsButton />
      </div> */}
    </div>
  );
}
