import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home/home-page";
import BookPage from "./pages/book/index";
import { Layout } from "./components/layout/layout";

export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
