import { useState } from "react";
import { Container, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = () => {

    }

    return (
        <Form onSubmit={onSubmit}>
            <Container>
                <Row className="d-flex flex-column text-center pt-lg-0 pt-3">
                    <Col><h2 className="font-playfair">coffee</h2></Col>
                    <Col><p>Welcome Back, Please login to your account</p></Col>
                </Row>
                <Row className="d-flex align-items-center flex-column text-center">
                    <Col md={8} xs={12}>
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
                    <Col md={8} xs={12}>
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
                    <Col>
                        <Button
                            variant="light"
                            type="submit"
                            className="px-4 fs-5"
                            style={{
                                borderRadius: "15px"
                            }}>
                            Sign In
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <p className="text-center">
                            Don't have an account?{' '}
                            <Link to="/auth/signup" 
                                className="text-decoration-none fw-bold link-white">
                                Sign up
                            </Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}