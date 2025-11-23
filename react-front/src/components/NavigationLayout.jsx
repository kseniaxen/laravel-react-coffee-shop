import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationLayout() {
    return (
        <Navbar expand="lg" variant="dark" className="position-absolute w-100">
            <Container className="navigation">
                <Navbar.Brand as={Link} to="/" className="fs-3 font-playfair">coffea</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            className="text-uppercase mx-2"
                            style={{ color: "white" }}>
                            home
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/coffee" 
                            className="text-uppercase mx-2"
                            style={{ color: "white" }}>
                            coffee
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/bakery" 
                            className="text-uppercase mx-2"
                            style={{ color: "white" }}>
                            bakery
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/about" 
                            className="text-uppercase mx-2"
                            style={{ color: "white" }}>
                            about
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/auth/login" 
                            className="text-uppercase mx-2"
                            style={{ color: "white" }}>
                            login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}