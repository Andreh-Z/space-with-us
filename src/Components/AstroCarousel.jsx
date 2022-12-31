import Carousel from "react-bootstrap/Carousel";
import travel1 from "../Assets/travel1.jpg";
import travel2 from "../Assets/travel2.jpg";
import travel3 from "../Assets/travel3.png";
import travel4 from "../Assets/travel4.png";

function AstroCarousel() {
  return (
    <Carousel
      style={{ width: "800px", height: "800px" }}
      className="rounded shadow-lg"
    >
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={travel1}
          alt="Second slide"
          style={{ width: "800px", height: "800px" }}
        />
        <Carousel.Caption>
          <h3 id="title" className="text-dark fw-bold">
            Spacey Vacation
          </h3>
          <p className="text-dark fw-bold" id="text1">
            The best vacation of my life, space is very spacious
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={travel2}
          alt="Third slide"
          style={{ width: "800px", height: "800px" }}
        />
        <Carousel.Caption>
          <h3 id="title">Shipwright</h3>
          <p id="text1">
            The best decision of my life! There was a monkey on the ship!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={travel3}
          alt="Third slide"
          style={{ width: "800px", height: "800px" }}
        />
        <Carousel.Caption>
          <h3 id="title">Jhon Chess</h3>
          <p id="text1">
            I was able to take amazing photos, I never thought I would travel
            with a monkey capable of beating me at chess!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={travel4}
          alt="Third slide"
          style={{ width: "800px", height: "800px" }}
        />
        <Carousel.Caption>
          <h3 id="title">Chimpanzee Charlie</h3>
          <p id="text1">
            A decent trip, humans are funny, I have beaten them at chess. It is
            clear that not all of them evolved.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AstroCarousel;
