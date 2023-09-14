import { useContext } from "react"
import { ReadingListContext } from "../context/readingList"


export default function useReadingList (){
    const context = useContext( ReadingListContext );
    if (context === 'undefined'){
        throw new Error('useReadingList must be used within a ReadinListProvider')
    }
    
    return context;
}