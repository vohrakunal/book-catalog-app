import React, {useEffect, useState} from "react";
import {toast} from 'react-toastify';

import {getAllBooks} from "../../servcies/books.service";
import RenderBooks from "./RenderBooks/RenderBooks";

import Loader from '../../components/Loader/Loader';

import { Container } from "react-bootstrap";

const ViewBooks: React.FC = () =>{


    const [books, setBooks] = useState([]);
    const [loader, setLoader] = useState(true);

    async function fetchBooks(){
        await getAllBooks().then(res=>{
            setLoader(false);
            if(res.status===200){
                setBooks(res.data);
            }
            else{
                toast.error("Something went wrong!")
            }
        }).catch(e=>{
            console.error(e);
        })
    }

    useEffect(()=>{
        fetchBooks()
    },[]);

    return (
        <>
            {loader? <Loader/> : 
            <Container>
                <div className="p-4 h3 text-center text-primary font-weight-bolder">
                    Books Catalogue
                </div> 
                <div style={{maxWidth: "55rem"}} className="m-auto">
                    <RenderBooks books={books}/>
                </div>       
            </Container>
        }
        </>
    )
}

export default ViewBooks;