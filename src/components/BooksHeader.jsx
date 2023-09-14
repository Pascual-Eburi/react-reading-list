
import useReadingList from "../hooks/useReadingList";

export default function BooksHeader({availableBooks}) {
  const { readingList } = useReadingList()


  return (
    <>
      <h2 className="available-books-title">{availableBooks.length} Libros disponibles</h2>
      <h6 className="reading-list-count">{readingList.length} en la lista de lectura</h6>
    </>
  );
}
