import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { getBookById } from '../../servcies/books.service';
import { param } from './bookDescription.types';
import Loader from '../../components/Loader/Loader';
import IBooks from '../../interfaces/books';
import { toast } from 'react-toastify';

export default function BookDescription() {

    const params: param = useParams();

    const [book, setBook] = useState({});

    const [loading, setLoading] = useState(true);

    
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


    return (
        <div>
            {loading? <Loader/>: "hello"}
        </div>
    )
}
