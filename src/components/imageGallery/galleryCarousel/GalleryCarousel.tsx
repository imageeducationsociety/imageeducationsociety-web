"use client";

import { IMAGE_GALLERY_QUERYResult } from "@/sanity/types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import OptImage from "@/components/commmon/OptImage";

const GalleryCarousel = ({
  data,
}: {
  data: IMAGE_GALLERY_QUERYResult | null;
}) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: false,
    responsive: [
      {
        breakpoint: 2040,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipe: false,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipe: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipe: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
        },
      },
    ],
  };

  return (
    <div id="GalleryCarousel">
      <div className="slider-container">
        <Slider {...settings}>
          {data &&
            data.images &&
            data.images.map((image) => (
              <div className="slider-item" key={image.asset?._id}>
                {image && image.asset?._id && (
                  <OptImage image={image} alt={image.asset._id} sizes="card" />
                )}
                <div className="img_bg" />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default GalleryCarousel;
