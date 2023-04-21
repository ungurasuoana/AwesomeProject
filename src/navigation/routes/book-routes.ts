import { BookListItem } from "../../types/booklistItem"

export enum BookRoutes {
    Home = 'Book',
    C = 'CustomNavigation',
    Card = 'Card'
}

export type BookRoutesProps = {
    [BookRoutes.Home]: undefined
    [BookRoutes.C]: undefined
    [BookRoutes.Card]: {title: string, description: string, image: number}
}