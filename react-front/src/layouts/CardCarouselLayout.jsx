import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import CardLayout from "./CardLayout";

export default function CardCarouselLayout() {
    const cards = [1, 2, 3, 4, 5];

    function chunkArray(array, size) {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }

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

    const slides = chunkArray(cards, cardsPerSlide);
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
                        {slide.map((card, i) => (
                            <CardLayout key={i} />
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}