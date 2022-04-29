import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Card from "./Card";
import CarouselCard from "./CarouselCard";

import classes from "./CarouselMain.module.css";

const CarouselMain = () => {

  // Change the image, title and body here to change the info on the cards
  const carouselCardData = {
    cardOne: {
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Green Gym",
      body: "The more active our members are, the more we will give back to the environment."
    },
    cardTwo: {
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Make a difference",
      body: "To yourself and the world"
    },
    cardThree: {
      image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Plant a tree",
      body: "Plant lasting change in your life and the world"
    },
  }


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
            image={carouselCardData.cardOne.image}
            title={carouselCardData.cardOne.title}
            body={carouselCardData.cardOne.body}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={carouselCardData.cardTwo.image}
            title={carouselCardData.cardTwo.title}
            body={carouselCardData.cardTwo.body}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={carouselCardData.cardThree.image}
            title={carouselCardData.cardThree.title}
            body={carouselCardData.cardThree.body}
          />
        </SwiperSlide>
      </Swiper>
    </Card>
  );
};

export default CarouselMain;
