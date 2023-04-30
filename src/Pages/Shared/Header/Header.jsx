import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../../Providers/AuthProvider';


const Header = () => {




    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D,  YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    I have over 3 years of experience in WordPress. I am specialized in (WordPress and Shopify) Woocommerce, WordPress Theme Customization, Shopify Store Design & Theme Development By Custom Code. I can fix any WordPress and Shopify error/issue like PHP, HTML, CSS, JaveScript errors, and other Themes and Plugin related issues. Client Satisfaction is my best priority.
                </Marquee>
            </div>
           
        </Container>
    );
};

export default Header; 