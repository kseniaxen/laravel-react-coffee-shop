import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProviders";

export default function NavigationLayout({ variant = "dark", textColor = "white", absolute = true }) {
    const [expanded, setExpanded] = useState(false);

    const { user, token, setUser, setToken } = useStateContext();

    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post('/logout')
            .then(() => {
                setUser({});
                setToken(null);
            })
    }

    return (
        <Navbar
            expand="lg"
            variant={variant}
            className={`w-100 ${absolute ? "position-absolute" : "position-relative"}`}
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
                            to="/menu/coffee"
                            className="text-uppercase my-2"
                            style={{ color: textColor }}
                            onClick={() => setExpanded(false)}>
                            coffee
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/menu/bakery"
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
                        {
                            !token ?
                                <Nav.Link
                                    as={Link}
                                    to="/auth/login"
                                    className="text-uppercase my-2"
                                    style={{ color: textColor }}
                                    onClick={() => setExpanded(false)}>
                                    login
                                </Nav.Link>
                                :
                                <Nav.Link
                                    className="text-uppercase my-2"
                                    style={{ color: textColor }}
                                    onClick={(ev) => onLogout(ev)}>
                                    logout
                                </Nav.Link>
                        }
                        <Nav.Link
                            as={Link}
                            to="/user"
                            className="text-uppercase my-2"
                            style={{ color: textColor }}
                            onClick={() => setExpanded(false)}>
                            {user.name}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}