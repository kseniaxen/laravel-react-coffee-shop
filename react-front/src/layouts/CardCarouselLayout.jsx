import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import CardLayout from "./CardLayout";

export default function CardCarouselLayout({ products = [] }) {
    const [cardsPerSlide, setCardsPerSlide] = useState(4);

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width < 480) setCardsPerSlide(1);
            else if (width < 768) setCardsPerSlide(1);
            else if (width < 992) setCardsPerSlide(2);
            else setCardsPerSlide(4);
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function chunkArray(array, size) {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }

    const slides = chunkArray(products, cardsPerSlide);

    if (products.length === 0) {
        return (
            <div className="text-center p-4">
                <p>Нет товаров для отображения</p>
            </div>
        );
    }

    return (
        <Carousel
            indicators={false}
            interval={null}
            prevLabel=""
            nextLabel=""
            prevIcon={
                <i className="bi bi-arrow-left fs-2 arrow-circle"></i>
            }
            nextIcon={
                <i className="bi bi-arrow-right fs-2 arrow-circle"></i>
            }
            className="custom-carousel"
        >
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div className="d-flex justify-content-center gap-4">
                        {slide.map((product) => (
                            <CardLayout
                                key={product.id}
                                name={product.name}
                                text={product.description}
                                size_product={product.size?.size_product}
                                size_name={product.size?.name}
                                dimensions={product.size?.dimensions}
                                price={product.base_price}
                            />
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}