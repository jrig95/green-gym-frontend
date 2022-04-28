import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Card from "./Card";
import CarouselCard from "./CarouselCard";

import classes from "./CarouselMain.module.css";

// uninstall react-multi-careous

const CarouselMain = () => {
  const CustomLeftArrow = ({ onClick }) => {
    return <i onClick={() => onClick()} className={classes.customLeftArrow} />;
  };

  const CustomRightArrow = ({ onClick }) => {
    return <i onClick={() => onClick()} className={classes.customRightArrow} />;
  };

  // const CustomDot = ({ onClick, active, index, carouselState }) => {
  //   const { currentSlide } = carouselState;
  //   return (
  //     <li style={{ background: active ? "grey" : "initial" }}>
  //       <button
  //         className={classes.customDot}
  //         active={classes.customDotActive}
  //         onClick={() => onClick()}
  //       />
  //     </li>
  //   );
  // };

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    const carouselItems = [];

    return <button>{React.Children.toArray(carouselItems)[index]}</button>;
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Card className={classes.container}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <CarouselCard
            image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Card One"
            body="this is a test to see if this card is going to work"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Card Two"
            body="this is another test to see if the chard is changing"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Card Three"
            body="this is this third card I've made and I think that it's pretty cool"
          />
        </SwiperSlide>
      </Swiper>
    </Card>
  );
};

export default CarouselMain;
