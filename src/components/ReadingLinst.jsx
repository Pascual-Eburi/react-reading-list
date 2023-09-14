import { useId } from "react";
import useReadingList from "../hooks/useReadingList";
import ReadingListBooks from "./ReadingListBooks";

export default function ReadingLinst() {
  const orderByPriorityId = useId()
  const handleOrder = () => {}
  const { readingList} = useReadingList()
  return (
    <aside>
      <section>
        <header>
          <h2>Lista de lectura</h2>
          <div className="filters">
            <div className="filter">
              <label htmlFor={orderByPriorityId}>Ordenar</label>
              <select id={orderByPriorityId} onChange={handleOrder}>
                <option value="default">Sin orden</option>
                <option value="low_hight">Mas Bajo</option>
                <option value="hight_low">Mas alta</option>
              </select>
            </div>
          </div>
        </header>

        
       
        <ReadingListBooks books={readingList} />
          

        

      </section>
    </aside>
  );
}
