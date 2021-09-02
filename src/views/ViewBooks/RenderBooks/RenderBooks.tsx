import React from 'react'
import BooksCard from '../../../components/Card/Card'

import IBooks from '../../../interfaces/books'

import "./RenderBooks.css";

type BooksArrProps = {
    books : IBooks[]
}

export default function RenderBooks(props: BooksArrProps) {
    function renderCard() {
        if (props.books.length > 0) {
            return (
                <>
                    {
                        props.books.map((data,index)=>{
                            return (
                                <>
                                    <BooksCard {...data} />
                                </>
                            )
                        })
                    }
                </>
            )
        }
        else {
            return (

                <div>
                    No Books Available
                </div>
            )
        }
    }

    return (
        <>
            {renderCard()}
        </>
    )
}
