import { Button, Card, Row, Col } from "react-bootstrap";

import CoffeeTmp from "../assets/img/coffee_tmp.jpg";

export default function CardLayout({ name = "No name", text = "No name", size_product = 100, size_name = "ml", dimensions, price = 10.2 }) {
    return (
        <Card
            style={{
                width: "18rem",
                backgroundColor: "#E2D9C8",
                borderRadius: "15px",
                padding: "15px",
                border: "none"
            }}
        >
            <div style={{ position: "relative" }}>
                <Card.Img
                    variant="top"
                    src={CoffeeTmp}
                    style={{
                        borderRadius: "15px",
                        height: "250px",
                        objectFit: "cover"
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        padding: "6px",
                        cursor: "pointer",
                    }}
                >
                    <i className="bi bi-heart" style={{ fontSize: "20px", color: "white" }}></i>
                </div>
            </div>

            <Card.Body className="p-0 pt-3">
                <Card.Title className="fs-3 fw-bold" style={{ color: "#30261C" }}>
                    {name}
                </Card.Title>
                <Card.Text as="div" style={{ color: "#2A0000" }}>
                    <p className="m-0">{text}</p>
                    <Row className="justify-content-between align-items-center">
                        <Col>
                            <p className="m-0 fw-bold">{price} $</p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <p className="m-0">
                                {size_name} {size_product} {dimensions}
                            </p>
                        </Col>
                    </Row>
                </Card.Text>
                <Button
                    style={{
                        backgroundColor: "#2A0000",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "10px"
                    }}
                >
                    Order Now
                </Button>
            </Card.Body>
        </Card>
    )
}