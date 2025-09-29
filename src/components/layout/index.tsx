import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../UI/header/index";
import { useMemo } from "react";
import styles from "./layout.module.css";

export function Layout() {
  const { pathname } = useLocation();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  return (
    <div>
      {!isHomePage && (
        <header className={styles.header_book}>
          <Header />
        </header>
      )}
      <Outlet />
    </div>
  );
}
