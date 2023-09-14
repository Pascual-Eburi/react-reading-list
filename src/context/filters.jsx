import { createContext, useState } from "react";

// creating the context
export const FiltersContext = createContext()

// create the context provider
export function FiltersProvider ({ children }){
    const [filters, setFilters] = useState({
        genre: 'all',
        minPages: 0,
        search: ''
    })
    return (
        <FiltersContext.Provider value={ { filters, setFilters }} >
            { children }
        </FiltersContext.Provider>
    )
}