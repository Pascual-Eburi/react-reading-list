import { createContext, useState } from "react";

// create the conext
export const ReadingListContext = createContext()


// creating the provider
export function ReadingListProvider ({children}) {
    const [readingList, setReadingList] = useState([])

    const bookIndexInReadingList = (book) => {
        return readingList.findIndex(item => item.ISBN === book.ISBN )
    }
    // add book to reading list
    const addToReadingList = (book) => {
        let priority = 3;
        setReadingList(prevState => (
            [...prevState, {...book, priority: priority }]
            )
        )
    }

    const removeFromReadingList = book => {
        setReadingList(prevState => prevState.filter((item) => item.ISBN !== book.ISBN))
    }

    const setBookPriority = (book, newPriority) => {
        const index = bookIndexInReadingList(book);
        if ( index < 0) return;
        const newReadingList = structuredClone(readingList)
        newReadingList[index].priority = newPriority;

        return setReadingList(newReadingList)
    }


    return (
    <ReadingListContext.Provider value={{ 
        readingList, 
        addToReadingList,
        removeFromReadingList, 
        setBookPriority,
        bookIndexInReadingList
    }}>
        { children}
    </ReadingListContext.Provider>
    )
}