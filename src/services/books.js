const BOOKS_END_POINT = 'src/mooks/books.json'

export const getBooks = async () => {
    try {
      const response = await fetch(BOOKS_END_POINT)
      const data = await response.json()
  
      const books = data.library
  
      return books?.map(({book}) => ({
        ISBN: book.ISBN,
        title: book.title,
        pages: book.pages,
        genre: book.genre,
        year: book.year,
        cover: book.cover,
        synopsis: book.synopsis,
        author: book.author
      }))

    } catch (e) {
      throw new Error('Error while fetching books')
    }
  }


export async function getGenres(bookList) {
    return new Set(
        bookList.map((book) => book.genre)
    );
}

