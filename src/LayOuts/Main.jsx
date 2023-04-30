import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import LeftNav from '../Pages/Shared/leftNav/leftNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav/>
                    </Col>
                    <Col className ='mt-3' lg={6}>
                            <Outlet/>
                    </Col>
                    <Col lg={3}>
                        <RightNav/>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;