import useReadingList from "../hooks/useReadingList";
import { ReadingListBookPriorities } from "../mooks/priorities";  
import { RemoveFromReadingListIcon } from "./Icons"; 

export default function ReadingListBooks({ books }) {
    const { setBookPriority, removeFromReadingList } = useReadingList()

   if (books.length <= 0) {
    return <p> No hay libros en tu lista de lectura </p>;
  } 


  return (
    <ul className="reading-list" id="reading-lista">
      {books && books.map(book => (
          <li className="book" key={`${book.ISBN}-${book.pages}`}  >
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
               <div className="priority-selection">
              <label>Prioridad</label>
                <select value={book.priority} 
                onChange={(e) => setBookPriority(book, e.target.value)}>
                {ReadingListBookPriorities.map(({ key, name }) => (
                  <option value={key} key={name} >
                    {name}{" "}
                  </option>

                )
                )}
              </select> 
            </div>
           </div>
           <button className="btn btn-remove" title="Eliminar" onClick={() => removeFromReadingList(book)}>
             <RemoveFromReadingListIcon />
           </button>
         </li>
       ))
       
       }

      

    </ul>
  )
}
