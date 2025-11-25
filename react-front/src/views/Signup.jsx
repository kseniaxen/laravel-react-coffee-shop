import { useState } from "react";
import { Container, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = () => {

    }
    return (
        <Form onSubmit={onSubmit}>
            <Container>
                <Row className="d-flex flex-column text-center pt-lg-0 pt-3">
                    <Col><h2 className="font-playfair">coffee</h2></Col>
                    <Col><p>Welcome, Please create your account</p></Col>
                </Row>
                <Row className="d-flex align-items-center flex-column text-center">
                    <Col md={8}>
                        <Form.Group className="mb-3 p-0">
                            <Form.Control
                                type="text"
                                id="name"
                                placeholder="Full name"
                                className="placeholder-white p-3"
                                style={{ backgroundColor: "#504848", color: "white", border: "none", borderRadius: "0px" }}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={8}>
                        <Form.Group className="mb-3 p-0">
                            <Form.Control
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="placeholder-white p-3"
                                style={{ backgroundColor: "#504848", color: "white", border: "none", borderRadius: "0px" }}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={8}>
                        <Form.Group className="mb-3 p-0">
                            <InputGroup>
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Password"
                                    className="placeholder-white p-3"
                                    style={{ backgroundColor: "#504848", color: "white", border: "none", borderRadius: "0px" }}
                                    required
                                />
                                <Button
                                    variant="light"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <i class="bi bi-eye-slash"></i> : <i class="bi bi-eye"></i>}
                                </Button>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col md={8}>
                        <Form.Group className="mb-3">
                            <InputGroup>
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Confirm password"
                                    className="placeholder-white p-3"
                                    style={{ backgroundColor: "#504848", color: "white", border: "none", borderRadius: "0px" }}
                                    required
                                />
                                <Button
                                    variant="light"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <i class="bi bi-eye-slash"></i> : <i class="bi bi-eye"></i>}
                                </Button>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button
                            variant="light"
                            type="submit"
                            className="px-4 fs-5"
                            style={{
                                borderRadius: "15px"
                            }}>
                            Sign Up
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <p className="text-center">
                            Already have an account?{' '}
                            <Link to="/auth/login"
                                className="text-decoration-none fw-bold link-white">
                                Sign In
                            </Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}