import React from 'react'

import { prop } from './RenderBook.types';

import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

import './RenderBook.css'

import bookImage from '../../../assets/icons/book.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faCartPlus, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';


export default function RenderBook(props: prop) {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className="bg-white rounded border-0 shadow p-3 mb-5 top bat-card-book">
                        <Card.Body>
                            <Row>
                                <Col md={8}>
                                    <div className="text-primary h3 font-weight-bolder">
                                        {props.book.title}
                                    </div>
                                    <div className="font-italic font-weight-100 bat-card-book-year">
                                        {"Published in Year "+props.book.year}
                                    </div>
                                    <div>
                                        By: XYZ person
                                    </div>
                                    <div className="bat-card-book-desc">
                                        <h5 className="text-primary">
                                            About the Book
                                        </h5>
                                        <h5>
                                            <FontAwesomeIcon icon={faQuoteLeft}/>
                                        </h5>
                                        <div className="text-muted">
                                            {props.book.description}
                                        </div>
                                    </div>
                                </Col>
                                <Col className="text-center" md={4}>
                                    <Image src={bookImage} className="bat-card-book-img" />
                                    <div className="mt-5">
                                        <Button variant="outline-primary" size="sm">
                                            <FontAwesomeIcon icon={faCartPlus}/> Buy Now
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="bat-reviews">
                                <Col>
                                    <h4 className="text-primary bat-reviews-title">
                                        Reviews 
                                    </h4>
                                    <div className="text-warning">
                                        <FontAwesomeIcon icon={faStar}/> 
                                        <FontAwesomeIcon icon={faStar}/> 
                                        <FontAwesomeIcon icon={faStar}/> 
                                        <FontAwesomeIcon icon={faStar}/> 
                                        <FontAwesomeIcon icon={faStarHalfAlt} />
                                    </div>
                                    <div className="mt-2">
                                        <Card className="shadow-none p-1 mb-5 bg-light text-muted rounded border-0">
                                            <Card.Body>
                                            <div>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorum, inventore quam ut totam, saepe officia accusamus nemo vero ducimus impedit distinctio. Quisquam suscipit itaque, maiores accusamus provident enim ex.
                                            </div>
                                            <div className="d-flex justify-content-between">
                                            <i>
                                                - abc xyz
                                            </i>
                                            <span>
                                            <FontAwesomeIcon icon={faStar}/> 
                                            <FontAwesomeIcon icon={faStar}/> 
                                            <FontAwesomeIcon icon={faStar}/> 
                                            <FontAwesomeIcon icon={faStar}/> 
                                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                            </span>
                                            </div>
                                                
                                            </Card.Body>

                                        </Card>

                                        <Card className="shadow-none p-1 mb-5 bg-light text-muted rounded border-0">
                                            <Card.Body>
                                            <div>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorum, inventore quam ut totam, saepe officia accusamus nemo vero ducimus impedit distinctio. Quisquam suscipit itaque, maiores accusamus provident enim ex.
                                            </div>
                                            <div className="d-flex justify-content-between">
                                            <i>
                                                - abc xyz
                                            </i>
                                            <span>
                                            <FontAwesomeIcon icon={faStar}/> 
                                            <FontAwesomeIcon icon={faStar}/> 
                                            <FontAwesomeIcon icon={faStar}/> 
                                            <FontAwesomeIcon icon={faStar}/> 
                                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                            </span>
                                            </div>
                                            </Card.Body>

                                        </Card>
                                    <div>
                                        <span className="text-secondary">
                                            ... Read More
                                        </span>    
                                    </div>                                        
                                   </div>
                                </Col>
                                
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}
