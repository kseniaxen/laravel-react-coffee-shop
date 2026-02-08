import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function FooterLayout() {
    return (
        <div className="footer">
            <Container fluid className="p-5">
                <Row className="px-5 pt-5 text-center text-md-start">
                    <Col xs={12} md={3}>
                        <h2 className="font-playfair" style={{ color: "white" }}>Coffea</h2>
                    </Col>
                    <Col xs={12} md={3}>
                        <h3 className="font-playfair fs-5 mb-4" style={{ color: "white" }}>SERVICES</h3>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            <li className="mb-3">
                                <Link to="/" className="text-decoration-none font-poppins" style={{color: "white"}}>Home</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/coffee" className="text-decoration-none font-poppins" style={{color: "white"}}>Coffee</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/dessert" className="text-decoration-none font-poppins" style={{color: "white"}}>Bakery</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/login" className="text-decoration-none font-poppins" style={{color: "white"}}>Login</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={3}>
                        <h3 className="font-playfair fs-5 mb-4" style={{ color: "white" }}>ABOUT US</h3>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            <li>
                                <Link to="/about" className="text-decoration-none font-poppins" style={{color: "white"}}>About us</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={3}>
                        <h3 className="font-playfair fs-5 mb-4" style={{ color: "white" }}>SOCIAL MEDIA</h3>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="d-flex justify-content-center justify-content-md-start gap-3">
                            <li>
                                <Link to="/" className="text-decoration-none">
                                    <i className="bi bi-twitter-x fs-5" style={{ color: "white" }}></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-decoration-none">
                                    <i className="bi bi-facebook fs-5" style={{ color: "white" }}></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-decoration-none">
                                    <i className="bi bi-instagram fs-5" style={{ color: "white" }}></i>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}