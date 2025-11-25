import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationLayout({ variant = "dark", textColor = "white" }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar 
            expand="lg" 
            variant={variant} 
            className="position-absolute w-100" 
            expanded={expanded}
            onToggle={() => setExpanded(prev => !prev)}
        >
            <Container className="navigation">
                <Navbar.Brand as={Link} to="/" className="fs-3 font-playfair">coffea</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="side-collapse">
                    <Nav className="mx-auto">
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            className="text-uppercase my-2"
                            style={{ color: textColor }}
                            onClick={() => setExpanded(false)}>
                            home
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/coffee" 
                            className="text-uppercase my-2"
                            style={{ color: textColor }}
                            onClick={() => setExpanded(false)}>
                            coffee
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/bakery" 
                            className="text-uppercase my-2"
                            style={{ color: textColor }}
                            onClick={() => setExpanded(false)}>
                            bakery
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/about" 
                            className="text-uppercase my-2"
                            style={{ color: textColor }}
                            onClick={() => setExpanded(false)}>
                            about
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/auth/login" 
                            className="text-uppercase my-2"
                            style={{ color: textColor }}
                            onClick={() => setExpanded(false)}>
                            login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}