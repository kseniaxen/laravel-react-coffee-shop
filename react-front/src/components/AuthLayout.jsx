import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProviders";
import NavigationLayout from "./NavigationLayout";
import FooterLayout from "./FooterLayout";
import { Container, Row, Col, Image } from "react-bootstrap";
import Banner from "../assets/img/banner-auth.png";

export default function AuthLayout() {
    const { token } = useStateContext()
    if (token) {
        return <Navigate to='/' />
    }
    return (
        <>
            <NavigationLayout variant="light" textColor="black" />
            <div className="auth pt-4">
                <Container className="d-flex justify-content-center align-items-center">
                    <Row className="shadow-lg"
                        style={{
                            width: "1000px",
                            borderRadius: "30px",
                            overflow: "hidden"
                        }}>
                        <Col
                            md={5}
                            className="p-0 d-none d-md-block"
                            style={{
                                backgroundImage: `url(${Banner})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                minHeight: "100%"
                            }}
                        >
                        </Col>
                        <Col xs={12} md={7} className="d-flex flex-column justify-content-center py-5"
                            style={{
                                backgroundColor: "#252525",
                                color: "white"
                            }}
                        >
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterLayout />
        </>
    )
}