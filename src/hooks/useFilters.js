import { useContext } from "react";
import { FiltersContext } from "../context/filters";
import { ReadingListContext } from "../context/readingList";

export default function useFilters(){
    const {filters, setFilters} = useContext(FiltersContext)

    const {bookIndexInReadingList} = useContext(ReadingListContext);

    const filterBooks = (books) => {
      return books.filter((book) => {
        
        if (filters.search.length <= 0) {
            return (
              book.pages >= filters.minPages &&
              (filters.genre === "all" || filters.genre === book.genre)  && 
              (bookIndexInReadingList(book) < 0) 
            );
        }
        return (
            book.pages >= filters.minPages &&
            (filters.genre === "all" || filters.genre === book.genre) &&
            (book.title.toLocaleLowerCase()
            .indexOf(filters.search.toLocaleLowerCase() ) !== -1 
            )  &&
            (bookIndexInReadingList(book) < 0) 
          );
      });
    };
  
    return { filters, filterBooks, setFilters}
  
  }
  