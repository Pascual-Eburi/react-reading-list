/* eslint-disable react/prop-types */

import useReadingList from "../hooks/useReadingList";

export default function Books({ books }) {
  const { addToReadingList } = useReadingList();

  return (

      <ul className="available-books" id="available-books">
        {books.map(book => (
          <li key={book.ISBN} className="book">
            <img src={book.cover} alt={book.title} />
            <div>
              <h4>{book.title}</h4>
              <p className="author">{book.author.name}</p>
              <p className="category">
                <span>Category: </span> {book.genre}
              </p>
              <p className="year">
                <span>Year: </span> <span> {book.year} </span>
              </p>
              <p className="pages">
                <span>Pages: </span> <span> {book.pages} </span>
              </p>

              <button onClick={ () => addToReadingList(book)}>Add to read</button>
            </div>
          </li>
        ))}
      </ul>
    
  );
}
