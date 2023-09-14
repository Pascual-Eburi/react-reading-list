
import { useId } from "react";
import useFilters from "../hooks/useFilters";

export default function Filters({ genres }) {

    const {filters, setFilters} = useFilters();
    const minPagesFilterId = useId();
    const genreFilterId = useId();

    const handleChangeMinPages  = (e) =>{
        // DOS FUNETES DE LA VERDAD ?
        setFilters (prevState => ({
            ...prevState,
            minPages: e.target.value
            
        }))
    }

    const handleChangeGenre = (e) => {
        setFilters(prevState => ({
            ...prevState,
            genre: e.target.value
        }))
    }

    const handleSearchChange = (e) => {
        setFilters(prevState => ({
            ...prevState,
            search: e.target.value
        }))
    }
  return (
      <section className="filters">
        <div className="filter">
          <label htmlFor={minPagesFilterId}>Filtrar por páginas</label>
          <input type="range" id={minPagesFilterId} onChange={handleChangeMinPages} min={0} max={1000} value={filters.minPages}/>
          <span>{filters.minPages} Paginas</span>
        </div>

        <div className="filter">
          <label htmlFor={genreFilterId}>Filtrar por género</label>
          <select id={genreFilterId} onChange={handleChangeGenre}>
            <option value="all">Todos</option>
            {
                genres.map(genre => {
                    return (
                        <option key={genre} value={genre}> {genre} </option>
                    )
                })
            }
          </select>
        </div>
        <div className="filter">
          <label htmlFor="search">Buscar</label>
          <input type="search" onChange={handleSearchChange} name="search" placeholder="Autor, Genero, ..." />
        </div>
      </section>

  );
}
