import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home/home-page";
import BookPage from "./pages/book/book-page";

export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
    </Router>
  );
}
