import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../Qzone/QZone';
import bg from '../../../assets/bg1.png'


const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className="mb-2" variant="outline-primary">  <FaGoogle /> Login With Google</Button>
            <Button variant="outline-success"> <FaGithub /> Login With Github</Button>
            <div>
                <h4 className='mt-4'>Find Us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebookF /> Facebook </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img className='position-absolute' src={bg} alt="" />
                <div className='position-relative'>
                    <h3 className='text-white'>Create an Amazing Newspaper</h3>
                </div>
            </div>
        </div>
    );
};

export default RightNav;