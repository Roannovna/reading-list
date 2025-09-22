import { Header } from "../../components/UI/header/header"
import { BookCard } from "../../components/book-card/book-card"

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <BookCard 
          image="/src/assets/book-cover/sluzhba-dostavki-knig.jpg"
        />
      </main>
    </div>
  )
}

export default App
