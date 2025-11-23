import { Button, Container, Image, Row, Col, Form } from "react-bootstrap";
import NavigationLayout from "../components/NavigationLayout";

import HotCoffee from "../assets/img/hot_coffee.png";
import ColdCoffee from "../assets/img/cold_coffee.png";
import CupCoffee from "../assets/img/cup_coffee.png";
import Dessert from "../assets/img/dessert.png";

import CardCarouselLayout from "../layouts/CardCarouselLayout";
import FeedbackLayout from "../layouts/FeedbackLayout";
import FooterLayout from "../components/FooterLayout";

export default function Main() {

    return (
        <>
            <NavigationLayout />
            <div className="hero">
                <Container className="my-3">
                    <Row>
                        <Col>
                            <p className="text-uppercase my-2" style={{ color: "white" }}>Welcome</p>
                            <h1 className="font-playfair mb-5 col-lg-4 col-12" style={{ color: "white" }}>We serve the richest coffee in the city!</h1>
                            <p className="mb-5 col-lg-4 col-12" style={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                            <Button variant="light" className="rounded-5 px-4 py-2">Order Now</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="coffee-type">
                <Container className="d-flex flex-md-row flex-column justify-content-between align-items-center py-5 col-7">
                    <div className="d-flex flex-column align-items-center text-center">
                        <Image src={HotCoffee} alt="hot_coffee" />
                        <p className="font-poppins mt-3">Hot Coffee</p>
                    </div>

                    <div className="d-flex flex-column align-items-center text-center">
                        <Image src={ColdCoffee} alt="cold_coffee" />
                        <p className="font-poppins mt-3">Cold Coffee</p>
                    </div>

                    <div className="d-flex flex-column align-items-center text-center">
                        <Image src={CupCoffee} alt="cup_coffee" />
                        <p className="font-poppins mt-3">Cup Coffee</p>
                    </div>

                    <div className="d-flex flex-column align-items-center text-center">
                        <Image src={Dessert} alt="dessert" />
                        <p className="font-poppins mt-3">Dessert</p>
                    </div>
                </Container>
            </div>
            <div className="special-coffee">
                <Container className="my-4 py-5">
                    <h2 className="text-uppercase font-playfair fs-3 text-center mb-5">Our Special Coffee</h2>
                    <CardCarouselLayout />
                </Container>
            </div>
            <div className="special-dessert">
                <Container className="my-4 py-5">
                    <h2 className="text-uppercase font-playfair fs-3 text-center mb-5">our special dessert</h2>
                    <CardCarouselLayout />
                </Container>
            </div>
            <div className="banner-explore">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs md="4">
                            <h2 className="font-playfair fs-1">Check Out Our Best Coffee Beans</h2>
                            <Button
                                style={{
                                    backgroundColor: "#30261C",
                                    border: "none",
                                    padding: "10px 35px",
                                    borderRadius: "25px"
                                }}>
                                Explore Out Products
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="feedback">
                <Container className="mb-5 pb-5">
                    <Row className="my-5 pt-3">
                        <Col>
                            <h3 className="fs-3 text-center" style={{ color: "#30261C" }}>Come and Join</h3>
                            <h2 className="text-uppercase font-playfair fs-3 text-center">our happy customers</h2>
                        </Col>
                    </Row>
                    <FeedbackLayout />
                </Container>
            </div>
            <div className="subscribe">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs md="5" className="text-center">
                            <h2 className="font-poppins fs-2">Join in and get 15% off!</h2>
                            <p>Subscribe to our newsletter in get 15% off discount code.</p>
                            <Form className="d-flex flex-column flex-md-row">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Email address"
                                    className="round-input mx-md-3 mx-0"/>
                                <Button
                                    className="mt-3 mt-md-0"
                                    style={{
                                        backgroundColor: "#30261C",
                                        border: "none",
                                        padding: "10px 35px",
                                        borderRadius: "25px"
                                    }}>
                                    Subscribe
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterLayout />
        </>

    );
}