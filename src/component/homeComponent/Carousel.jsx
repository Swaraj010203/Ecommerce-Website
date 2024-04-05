import React from "react";
import { CarouselData } from "./CarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  const items = CarouselData.map((item) => (
    <img className=" h-screen flex items-center justify-center cursor-pointer w-8/12 mx-auto" src={item.image} alt="" role="presentation"/>
  ));

  return (
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
    disableDotsControls
/>
  )
};

export default Carousel;
