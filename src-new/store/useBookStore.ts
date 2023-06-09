import { create } from 'zustand'
import { BookListItem } from '../../src/types/booklistItem'
import { data } from '../../src/components/listitem'
import { createJSONStorage, persist } from 'zustand/middleware'
import { zustandStorage } from './zustandStorage'

export interface BookState {
    books: BookListItem[]
    book: BookListItem | null
    setCurrentBook: (book: BookListItem) => void
    getBooks: (data: BookListItem[]) => void
}

export const useBookStore = create<BookState>(
    // persist<BookState>(
    (set) => ({
    books: [],
    book: null,
    setCurrentBook: (newBook: BookListItem) => {
        set((state:BookState) => ({book: newBook}))
    },
    getBooks: (data:BookListItem[]) => {
    set((state:BookState) => ({books: data}))
}
}),
// {
//     name: 'book-storage',
//     storage: createJSONStorage(() => zustandStorage)
// }
// )
)

// export const useBookStore = create<BookState>((set) => ({
//     books: data,
//     book: null,
//     setCurrentBook: (newBook: BookListItem) => {
//         set((state:BookState) => ({book: newBook}))
//     }
// }))