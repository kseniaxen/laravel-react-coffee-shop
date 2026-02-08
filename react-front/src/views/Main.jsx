import { useState, useEffect } from "react";
import { Button, Container, Image, Row, Col, Form, Spinner } from "react-bootstrap";
import NavigationLayout from "../components/NavigationLayout";

import HotCoffee from "../assets/img/hot_coffee.png";
import ColdCoffee from "../assets/img/cold_coffee.png";
import CupCoffee from "../assets/img/cup_coffee.png";
import Dessert from "../assets/img/dessert.png";

import CardCarouselLayout from "../layouts/CardCarouselLayout";
import FeedbackLayout from "../layouts/FeedbackLayout";
import FooterLayout from "../components/FooterLayout";

import axiosClient from "../axios-client";

export default function Main() {

    const [coffeeProducts, setCoffeeProducts] = useState([]);
    const [dessertProducts, setDessertProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProductsMainPage();
    }, []);

    const getProductsMainPage = () => {
        setLoading(true);

        axiosClient
            .get(`/products/main-page`)
            .then(({ data }) => {
                console.log('API Response:', data);

                if (!data || !data.data) {
                    console.error('Нет данных в ответе API');
                    return;
                }

                console.log('Все товары:', data.data);
                console.log('Категории товаров:', data.data.map(p => p.category?.name));

                const coffeeItems = data.data.filter(product => {
                    const categoryName = product.category?.name?.toLowerCase() || '';
                    console.log(`Товар "${product.name}": категория "${categoryName}"`);
                    return categoryName.includes('coffee') || categoryName.includes('кофе');
                });

                const dessertItems = data.data.filter(product => {
                    const categoryName = product.category?.name?.toLowerCase() || '';
                    return categoryName.includes('dessert') || categoryName.includes('десерт');
                });

                console.log('Найдено товаров кофе:', coffeeItems.length);
                console.log('Найдено товаров десертов:', dessertItems.length);

                setCoffeeProducts(coffeeItems);
                setDessertProducts(dessertItems);
            })
            .catch(error => {
                console.error('Ошибка API:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

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
            <div className="coffee-type d-none d-lg-flex">
                <Container className="d-flex flex-md-row flex-column justify-content-between align-items-center py-5 col-7">
                    <div className="d-flex flex-column align-items-center text-center">
                        <Image src={HotCoffee} alt="hot_coffee" />
                        <p className="font-roboto mt-3">Hot Coffee</p>
                    </div>

                    <div className="d-flex flex-column align-items-center text-center">
                        <Image src={ColdCoffee} alt="cold_coffee" />
                        <p className="font-roboto mt-3">Cold Coffee</p>
                    </div>

                    <div className="d-flex flex-column align-items-center text-center">
                        <Image src={CupCoffee} alt="cup_coffee" />
                        <p className="font-roboto mt-3">Cup Coffee</p>
                    </div>

                    <div className="d-flex flex-column align-items-center text-center">
                        <Image src={Dessert} alt="dessert" />
                        <p className="font-roboto mt-3">Dessert</p>
                    </div>
                </Container>
            </div>
            <div className="special-coffee">
                <Container className="my-4 py-5">
                    <h2 className="text-uppercase font-playfair fs-3 text-center mb-5">Our Special Coffee</h2>
                    {loading && (
                        <div className="d-flex justify-content-center my-5">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    )}
                    {!loading && <CardCarouselLayout products={coffeeProducts} />}
                </Container>
            </div>
            <div className="special-dessert">
                <Container className="my-4 py-5">
                    <h2 className="text-uppercase font-playfair fs-3 text-center mb-5">our special dessert</h2>
                    {loading && (
                        <div className="d-flex justify-content-center my-5">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    )}
                    {!loading && <CardCarouselLayout products={dessertProducts} />}
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
                            <h2 className="font-roboto fs-2">Join in and get 15% off!</h2>
                            <p>Subscribe to our newsletter in get 15% off discount code.</p>
                            <Form className="d-flex flex-column flex-md-row">
                                <Form.Control
                                    type="text"
                                    placeholder="Email address"
                                    className="round-input mx-md-3 mx-0" />
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