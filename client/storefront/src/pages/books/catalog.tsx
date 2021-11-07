import { NextPage, InferGetStaticPropsType } from 'next'
import BookPreview from '../../common/components/books/preview'
import { IBook } from '@/types/index';


export default function Catalog({ books }: InferGetStaticPropsType<typeof getStaticProps>) {
    const booksList = books.map((book) =>
        <BookPreview key={book.id} book={book} addToCart={(id: number) => { console.log(id) }} />
    )

    return (
        <div>
            <div>Books catalog page</div>
            <div>
                {booksList}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            books: [
                { id: 1, title: 'Harry Potter', slug: 'harry-potter', description: 'Book about Potter' },
                { id: 2, title: 'Harry Potter 2', slug: 'harry-potter2', description: 'Book about Potter 2' },
            ],
        },
    }
}
