import { useState, useRef } from "react";
import { Container, Form, Row, Col, InputGroup, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProviders";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();

    const { setUser, setToken } = useStateContext();
    const [errors, setErrors] = useState(null);

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        setErrors(null);
        axiosClient.post('/login', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    if(response.data.errors) {
                        setErrors(response.data.errors)
                    } else {
                        setErrors({
                            email : [response.data.message]
                        })
                    }
                }
            })
    }

    return (
        <Form onSubmit={onSubmit}>
            <Container>
                <Row className="d-flex flex-column text-center pt-lg-0 mt-3">
                    <Col><h2 className="font-playfair">coffee</h2></Col>
                    <Col><p>Welcome Back, Please login to your account</p></Col>
                </Row>
                <Row className="d-flex align-items-center flex-column text-center">
                    <Col md={8} xs={12}>
                        {errors && (
                            <Alert variant="danger">
                                {Object.keys(errors).map(key => (
                                    <p key={key} className="m-0 p-0">{errors[key][0]}</p>
                                ))}
                            </Alert>
                        )}
                    </Col>
                </Row>
                <Row className="d-flex align-items-center flex-column text-center">
                    <Col md={8} xs={12}>
                        <Form.Group className="mb-3 p-0">
                            <Form.Control
                                ref={emailRef}
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="placeholder-white p-3"
                                style={{ backgroundColor: "#504848", color: "white", border: "none", borderRadius: "0px" }}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={8} xs={12}>
                        <Form.Group className="mb-3 p-0">
                            <InputGroup>
                                <Form.Control
                                    ref={passwordRef}
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Password"
                                    className="placeholder-white p-3"
                                    style={{ backgroundColor: "#504848", color: "white", border: "none", borderRadius: "0px" }}
                                />
                                <Button
                                    variant="light"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
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
            <Container className="mt-2">
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