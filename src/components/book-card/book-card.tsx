import { StatusButton } from "../status-button/status-button";
import styles from "./book-card.module.css";

export function BookCard({ image }: { image: string }) {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.card} />
      <div className={styles.card_button}>
        <StatusButton />
      </div>
    </div>
  );
}
