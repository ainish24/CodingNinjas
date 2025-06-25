import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

// When using React Bootstrap, we can use NavLink instead of Link for creating navigation links which collides with the Nav.Link
// component of Bootstrap. In order to solve this problem, we can use a prop named "as" to make the Nav.Link 
// component behave like a NavLink from react-router-dom.

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/" as={NavLink} >NewsApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/contact-us" as={NavLink}>Contact Us</Nav.Link>
            <Nav.Link to="/about-us" as={NavLink}>About Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link to="signup" as={NavLink}>Sign Up</Nav.Link>
            <Nav.Link to="signin" as={NavLink}>Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;