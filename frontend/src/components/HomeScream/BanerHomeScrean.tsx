"use client"
import Image from "next/image" 
import Banner from "../../../public/banner1.webp"
import Banner2 from "../../../public/banner_SlideBanner_1hqiI0_d3ef2298-7f54-42f0-bf12-86753226d2a3.webp"
import Banner3 from "../../../public/banner_SlideBanner_58fAgI_51310baa-44bb-45c2-87fe-bfaa81f64a90.webp"
import Slider from "react-slick"
import { CustomNextArrow, CustomPrevArrow } from "./StyleSlider"

export default function BanerHomeScrean() {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  return (
<div className="slider-container ">
      <Slider {...settings}>
        <div>
            <Image src={Banner2} alt="banner1"/>
        </div>
        <div>
            <Image src={Banner} alt="banner1"/>
        </div>
        <div>
            <Image src={Banner3} alt="banner1"/>
        </div>
      </Slider>
    </div>
  )
}
