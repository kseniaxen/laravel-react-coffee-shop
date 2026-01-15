import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import CardLayout from "../layouts/CardLayout";
import { Container, Row, Col, Spinner } from "react-bootstrap";

export default function Menu() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProducts();
    }, [category]);

    const getProducts = () => {
        setLoading(true);

        axiosClient
            .get(`/products?category=${category}`)
            .then(({ data }) => {
                setProducts(data.data);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="mt-4" style={{ minHeight: '60vh' }}>
            {loading &&
                <div className="d-flex justify-content-center align-items-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
            <Container>
                <Row className="g-4 g-md-4">
                    {products.map(product => (
                        <Col md={6} lg={4} xl={3} key={product.id}>
                            <div className="d-flex justify-content-center">
                                <CardLayout
                                    name={product.name}
                                    text={product.description}
                                    size_product={product.size.size_product}
                                    size_name={product.size.name}
                                    dimensions={product.size.dimensions}
                                    price={product.base_price}/>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}