import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

export default function Giftsidebar({giftCatClicked}) {
    return (
        <React.Fragment>
            <Form.Label className="fs-4 fw-bold  mysidebar">Categories</Form.Label>
            <ul className='sidebar Shopsidebar  mysidebar'>
                <li><Link to="" name="all" onClick={giftCatClicked}>All</Link></li>
                <li><Link to="" name="gift-for-her" onClick={giftCatClicked}>For Her</Link></li>
                <li><Link to="" name="gift-for-him" onClick={giftCatClicked}>For Him</Link></li>
                <li><Link to="" name="gift-diamond" onClick={giftCatClicked}>Diamond Gift</Link></li>
                <li><Link to="" name="gift-18k" onClick={giftCatClicked}>18k Gift</Link></li>
                <li><Link to="" name="gift-21k" onClick={giftCatClicked}>21k Gift</Link></li>
                <li><Link to="" name="gift-bundled" onClick={giftCatClicked}>Bundled Gift</Link></li>
            </ul>
        </React.Fragment>            
    ); 
}