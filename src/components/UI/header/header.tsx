import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/src/assets/icons/logo.svg" alt="Лисичка Ро" width={125} />
      </Link>
    </header>
  );
}
