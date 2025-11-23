import { Carousel } from "react-bootstrap";

export default function CardCarouselLayout() {
    const testimonials = [
        { id: 1, name: "James Smith", role: "Entrepreneur" },
        { id: 2, name: "James Smith", role: "Entrepreneur" },
        { id: 3, name: "James Smith", role: "Entrepreneur" },
        { id: 4, name: "James Smith", role: "Entrepreneur" },
    ];

    function chunk(arr, size) {
        return arr.reduce((acc, _, i) => {
            if (i % size === 0) acc.push(arr.slice(i, i + size));
            return acc;
        }, []);
    }

    return (
        <Carousel indicators={true} controls={false} interval={null}>
            {chunk(testimonials, 3).map((group, index) => (
                <Carousel.Item key={index}>
                    <div className="d-flex justify-content-center gap-4 flex-wrap">
                        {group.map((item) => (
                            <div
                                key={item.id}
                                className="testimonial-card p-4"
                                style={{
                                    width: "350px",
                                    background: "#E2D9C8",
                                    borderRadius: "12px",
                                }}
                            >
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div>
                                        <h5 className="fw-bold m-0">{item.name}</h5>
                                        <p className="m-0">{item.role}</p>
                                    </div>
                                </div>

                                <p style={{ fontSize: "14px" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}