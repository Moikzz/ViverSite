import "../Layout.css";

import { useState } from "react";
import { GetCarouselData } from "../../../data/CarouselData";
import { carouselImageURL } from "../../../utils/Image-Util";

import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";

function BsCarousel() {
  const Carousels = GetCarouselData();

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      {Carousels.map((banner) => {
        return (
          <Carousel.Item key={banner.id} className="carousel-slide">
            <img src={carouselImageURL(banner.image)} />
            <Carousel.Caption>
              <h3>{banner.title}</h3>
              <p>{banner.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

BsCarousel.propTypes = {
  id: PropTypes.any,
  image: PropTypes.any,
  title: PropTypes.any,
  subtitle: PropTypes.any,
};

export default BsCarousel;
