import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import jujuLogo from '../images/navlogo.png';

export default function NavScroll() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Link class="navbar-brand" to="/"><img src={jujuLogo} /></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Link to="/shop" class='nav-link text-white'>Shop</Link>
            <Link to="/cart" class='nav-link text-white'>Cart</Link>
            <Link to="/about" class='nav-link text-white'>About</Link>
            <Link to="/register" class='nav-link text-white'>Register</Link>
            <Link to="/login" class='nav-link text-white'>Login</Link>
            <Link to="/gifts" class='nav-link text-white'>Gifts</Link>
            { /* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
  </NavDropdown> */ }
            <Nav.Link href='#' className='text-white'>
              <Icon.Bag />
              <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </Nav.Link>
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

