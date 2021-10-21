import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partnerList = [
  { img: "1", animationDealay: "",url:"https://sepuls.cl/" },
  { img: "2", animationDealay: "30",url:"https://www.ozcoffee.cl/" },
  { img: "1", animationDealay: "" },
  { img: "1", animationDealay: "" },
];

export default function BrandAnimation() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        {partnerList.map((val, i) => (
          <li className="item" key={i}>
            <a href={val.url}>
            <img
              src={`img/partners/${val.img}.png`}
              alt="partners brand"
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay={val.animationDealay}
            />
            </a>
          </li>
        ))}
        {/* End single parter image */}
      </Slider>
    </ul>
  );
}
