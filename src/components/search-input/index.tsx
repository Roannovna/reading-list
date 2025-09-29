import type { ChangeEvent } from "react";
import styles from "./search-input.module.css";

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export function SearchInput(props: SearchInputProps) {
  return (
    <div>
      <input
        // type="search"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search..."
        className={styles.input}
      />
    </div>
  );
}
