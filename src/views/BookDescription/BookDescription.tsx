// React
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { getBookById } from '../../servcies/books.service';

// types
import { param } from './bookDescription.types';
import IBooks from '../../interfaces/books';

// Components
import Loader from '../../components/Loader/Loader';
import RenderBook from './RenderBook/RenderBook';
import { toast } from 'react-toastify';

export default function BookDescription() {

    const params: param = useParams();

    const [book, setBook] = useState<IBooks>();

    const [loading, setLoading] = useState(true);

    // UseEffect Functions
    async function getBookDetails(){
         await getBookById(params.bookId).then(res=>{
            setLoading(false)
            if(res.status===200){
                 setBook(res.data); 
             }
             else{
                 toast.error("Something Went Wrong!")
             }
         }).catch(e=>{
            console.error(e);
            toast.error("Something Went Wrong!")
         })
    }


    useEffect(() => {
        getBookDetails()
    }, [])


// main return
    return (
        <div>
            {
            loading? <Loader/>: book?
                <RenderBook book={book}/>: "Book data Not Available"
                
            }
        </div>
    )
}
