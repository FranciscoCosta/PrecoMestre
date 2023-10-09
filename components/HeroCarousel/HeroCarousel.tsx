'use client'


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
const heroImages = [
  {
    imgUrl: "/assets/images/hero1.png",
    alt: "Airfryer",
  },
  {
    imgUrl: "/assets/images/hero3.png",
    alt: "Smart TV",
  },
  {
    imgUrl: "/assets/images/hero2.png",
    alt: " SmartWatch",
  },
  {
    imgUrl: "/assets/images/hero4.png",
    alt: "Geladeira Smart",
  },
  {
    imgUrl: "/assets/images/hero5.png",
    alt: "Cadeira Escritório",
  },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel showThumbs={false} autoPlay infiniteLoop interval={2000} showArrows={false} showStatus={false}>
        {
          heroImages.map((image) => (
            <div className="w-[484px] h-[484px]">
              <Image
              src={image.imgUrl}
              alt={image.alt}
              fill
              key={image.alt}
              objectFit="contain"
              />
            </div>
          ))
        }
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
