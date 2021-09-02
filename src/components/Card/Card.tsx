import React from 'react'
import { Card, Button, Image, Row, Col } from 'react-bootstrap';
import IBooks from '../../interfaces/books';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuoteLeft, faBookOpen, faExclamationCircle, faCartPlus } from "@fortawesome/free-solid-svg-icons";

import './Card.css';

import bookIcon from "../../assets/icons/book.png";

function BooksCard (props: IBooks){
    return (
        <>
            <Card key={props._id} className="mx-2 bat-catalog-card shadow p-3 mb-5 bg-white border-0" >
                <Card.Body>
                    <Row>

                    <Col md={8} className="mt-2">
                        <div className="text-secondary font-weight-bolder h5">
                            {props.title} 
                            <div>
                                <small className="bat-card-year" >
                                    {"Published in " + props.year}
                                </small>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="bat-card-desc-title text-primary" >
                                About the Book
                            </div>
                            <div >
                                <FontAwesomeIcon icon={faQuoteLeft} className="text-primary"/>
                                <span className="text-muted m-2 text-truncate" >
                                    {props.description}
                                </span>
                            </div>
                        </div>
                        
                    </Col>
                    <Col md={4} className="text-center mt-2">
                        <Image src={bookIcon} className="bat-card-book-img"/>
                        <div className="text-muted">
                            <FontAwesomeIcon icon={faExclamationCircle}/>
                            {" "}No Image
                        </div>
                    </Col>
                    </Row>
                    <div>
                        <Button variant="outline-info" size="sm" className="m-2">
                            <FontAwesomeIcon icon={faBookOpen}/> Read More
                        </Button>
                        <Button variant="success" size="sm" className="m-2 text-white" >
                            <FontAwesomeIcon icon={faCartPlus}/> Buy Now
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}


export default BooksCard;