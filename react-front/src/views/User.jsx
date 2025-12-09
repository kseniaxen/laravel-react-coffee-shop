import { Card, Container, Row, Col } from "react-bootstrap";
import { useStateContext } from "../contexts/ContextProviders";

export default function User() {
    const { user } = useStateContext();

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <Card className="shadow-sm">
                        <Card.Body className="text-center">
                            <i className="bi bi-person-circle" style={{ fontSize: "4rem", color: "#6c757d" }}></i>
                            <Card.Title className="mt-3">{user.name || "No Name"}</Card.Title>
                            <Card.Text className="text-muted">{user.email || "No Email"}</Card.Text>
                            <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
                                Registered: {user.created_at ? new Date(user.created_at).toLocaleDateString() : "-"}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}