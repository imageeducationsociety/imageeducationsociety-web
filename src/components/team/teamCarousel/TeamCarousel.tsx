"use client";

import { TEAM_QUERYResult } from "@/sanity/types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import OptImage from "@/components/commmon/OptImage";

const TeamCarousel = ({ data }: { data: TEAM_QUERYResult }) => {
  const settings = {
    dots: false,
    infinite: true,
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
    <div className="team_carousel">
      <div className="slider-container">
        <Slider {...settings}>
          {data &&
            data.team &&
            data.team.map((member) => (
              <div className="slider-item" key={member.name}>
                <div className="img_bg"></div>
                <div className="img_bg_secondary"></div>
                {member.image && member.name && (
                  <OptImage
                    image={member.image}
                    alt={member.name}
                    sizes="card"
                  />
                )}
                <div className="content">
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamCarousel;
