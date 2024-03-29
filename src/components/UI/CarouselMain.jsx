import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Card from "./Card";
import CarouselCard from "./CarouselCard";

import classes from "./CarouselMain.module.css";
import CarouselOne from '../../assets/carouselle_pic_one.JPG'
import CarouselTwo from '../../assets/carouselle_two_group_pic.JPG'
import CarouselThree from  '../../assets/carouselle_three_bamboo.JPG'

const CarouselMain = () => {
  const { t } = useTranslation();

  // Change the image, title and body here to change the info on the cards
  // Add translation to the CarouselCard directly - no need for this object
  // const carouselCardData = {
  //   cardTwo: {
  //     image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "Make a difference",
  //     body: "To yourself and the world"
  //   },
  //   cardThree: {
  //     image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "Plant a tree",
  //     body: "Plant lasting change in your life and the world"
  //   },
  // }


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
            image ={CarouselOne}
            // image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title={t("carousel_card_one_title")}
            body={t("carousel_card_one_body")}
            bodyTwo={t("carousel_card_one_body_two")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
          image={CarouselTwo}
            // image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            // title={carouselCardData.cardTwo.title}
            title={t("carousel_card_two_title")}
            // body={carouselCardData.cardTwo.body}
            body={t("carousel_card_two_body")}
            bodyTwo={t("carousel_card_two_body_two")}

          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={CarouselThree}
            // image="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            // title={carouselCardData.cardThree.title}
            title={t("carousel_card_three_title")}
            // body={carouselCardData.cardThree.body}
            body={t("carousel_card_three_body")}

          />
        </SwiperSlide>
      </Swiper>
    </Card>
  );
};

export default CarouselMain;
