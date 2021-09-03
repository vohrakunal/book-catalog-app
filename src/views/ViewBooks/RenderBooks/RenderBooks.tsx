import React from 'react'
import BooksCard from '../../../components/BooksCard/BooksCard'

import { prop } from './RenderBooks.types';

import "./RenderBooks.css";

export default function RenderBooks(props: prop) {
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
