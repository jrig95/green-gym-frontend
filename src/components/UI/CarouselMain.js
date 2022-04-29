import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Card from "./Card";
import CarouselCard from "./CarouselCard";

import classes from "./CarouselMain.module.css";

// uninstall react-multi-careous

const CarouselMain = () => {
  return (
    <Card className={classes.container}>
      <Swiper
        autoplay={{ delay: 6000 }}
        delay={1000}
        pagination={{ clickable: true}}
        navigation={{ clickable: true}}
        modules={[Pagination, Autoplay]}
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
