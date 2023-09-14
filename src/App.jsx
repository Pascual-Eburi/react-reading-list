/* import './App.css' */
import { useEffect, useState } from "react";
import "../src/assets/css/styles.css";
import Books from "./components/Books";
import Header from "./components/Header";
import ReadingLinst from "./components/ReadingLinst";
import { getBooks } from "./services/books";
import BooksHeader from "./components/BooksHeader";
import Filters from "./components/Filters";

import useFilters from "./hooks/useFilters";


function App() {
  const [books, setBooks] = useState([]);
  const { filterBooks} = useFilters()

  useEffect(() => {
    async function fetchBooks() {
      const booksData = await getBooks();
      setBooks(booksData);
    }

    fetchBooks();
  }, []);

  const bookGenres = (books) => {
    const uniqueGenres = new Set(books.map((book) => book.genre));
    return [...uniqueGenres];
  }
  

  const filteredBooks = filterBooks(books);
  const genres = bookGenres(books);

  return (
    <>
      <Header />
      <main>
        <header>
          <BooksHeader availableBooks = {filteredBooks}/>
          <Filters genres={genres} />
        </header>
        {<Books books={filteredBooks} />}
      </main>

      <ReadingLinst />
    </>
  );
}

export default App;
