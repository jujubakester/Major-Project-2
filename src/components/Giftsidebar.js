import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

export default function Giftsidebar() {
    return (
        <React.Fragment>
            <Form.Label className="fs-4 fw-bold  mysidebar">Categories</Form.Label>
            <ul className='sidebar Shopsidebar  mysidebar'>
                <li><Link to="">Gifts for her</Link></li>
                <li><Link to="">Gifts for him</Link></li>
                <li><Link to="">Gift card</Link></li>
                <li><Link to="">Diamond Gift</Link></li>
                <li><Link to="">18k Gift</Link></li>
            </ul>
        </React.Fragment>            
    ); 
}