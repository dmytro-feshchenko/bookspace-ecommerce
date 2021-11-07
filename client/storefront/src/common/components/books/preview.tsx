import * as React from 'react'
import { IBook } from '../../types'

type Props = {
    book: IBook
    addToCart: (id: number) => void
}

const BookPreview: React.FC<Props> = ({ book, addToCart }) => {
    return (
        <div>Preview</div>
    )
}

export default BookPreview;
