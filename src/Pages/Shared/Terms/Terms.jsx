import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, et in? Omnis animi ipsa asperiores optio eligendi culpa libero soluta, et, nulla quos placeat ipsam corporis, ad provident eius quae!</p>
            <p>Go to Back to <Link to="/register">Register</Link> </p>
        </Container>
    );
};

export default Terms;