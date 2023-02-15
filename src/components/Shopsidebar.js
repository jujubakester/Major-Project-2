import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

export default function Shopsidebar() {

    const [isCheckedHim, setIsCheckedHim] = useState(true); 
    const [isCheckedHer, setIsCheckedHer] = useState(true); 
    const [isChecked18k, setIsChecked18k] = useState(true); 

    return (
        <React.Fragment>
            <Form.Label className="fs-4 fw-bold mysidebar">Categories</Form.Label>
            <ul className='sidebar Shopsidebar mysidebar'>
                <li><Link to="">Rings</Link></li>
                <li><Link to="">Earings</Link></li>
                <li><Link to="">Bracelet</Link></li>
                <li><Link to="">Necklace</Link></li>
            </ul>


            <Form.Label className="fs-4 fw-bold">Price Range</Form.Label>
            <Form.Range />

            <Form.Label className="fs-4 fw-bold">Filter</Form.Label>
            <Form>
            {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3  mysidebar">
                    <Form.Check type={type} id='for-him' label="For Him" checked={isCheckedHim} onChange={ ()=>setIsCheckedHim(!isCheckedHim) } />
                    <Form.Check type={type} id='for-him' label='For Her' checked={isCheckedHer} onChange={ ()=>setIsCheckedHer(!isCheckedHer) } />
                    <Form.Check type={type} id='18k' label='18k' checked={isChecked18k} onChange={ ()=>setIsChecked18k(!isChecked18k) } />
                </div>
            ))}
            </Form>

        </React.Fragment>
    ); 
}