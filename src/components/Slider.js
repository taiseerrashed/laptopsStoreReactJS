import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../assets/images/slide-1.jpg"
import Slide2 from "../assets/images/slide-2.avif"
import Slide3 from "../assets/images/slide-3.jpg"

const Slide = ({ src, alt }) => (
    <div>
      <img src={src} alt={alt} style={{width: "100%", height: "500px" , objectFit: "cover"}}/>
    </div>
  );

function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <Slider {...settings} className="mb-5">
        <Slide src={Slide1} alt="slide-1" />
        <Slide src={Slide2} alt="slide-2" />
        <Slide src={Slide3} alt="slide-3" />
    </Slider>
  );
}

export default MainSlider;
