import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const leftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://the-news-dragon-server-seven-murex.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h2>All Category </h2>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }

                <Row xs={1} className="g-4">
                    <Col className='mt-2 mb-2'>
                        <Card>
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                Bayern Slams Authorities Over Flight Delay to Club World Cup
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-2 mb-2'>
                        <Card>
                            <Card.Img variant="top" src={second} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                Bayern Slams Authorities Over Flight Delay to Club World Cup
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-2 mb-2'>
                        <Card>
                            <Card.Img variant="top" src={third} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                Bayern Slams Authorities Over Flight Delay to Club World Cup
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default leftNav;