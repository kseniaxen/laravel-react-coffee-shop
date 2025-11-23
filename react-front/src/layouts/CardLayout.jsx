import { Button, Card } from "react-bootstrap";

import CoffeeTmp from "../assets/img/coffee_tmp.jpg";

export default function CardLayout() {
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
                    Lungo coffee
                </Card.Title>
                <Card.Text style={{ color: "#2A0000" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
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