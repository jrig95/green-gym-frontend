import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import CarouselCard from "./CarouselCard";

import classes from "./CarouselMain.module.css";

const CarouselMain = () => {
  const CustomLeftArrow = ({ onClick }) => {
    return <i onClick={() => onClick()} className={classes.customLeftArrow} />;
  };

  const CustomRightArrow = ({ onClick }) => {
    return <i onClick={() => onClick()} className={classes.customRightArrow} />;
  };

  const CustomDot = ({ onClick, active, index, carouselState }) => {
    const { currentSlide } = carouselState;
    return (
      <li style={{ background: active ? "grey" : "initial" }}>
        <button
          className={classes.customDot}
          active={classes.customDotActive}
          onClick={() => onClick()}
        />
      </li>
    );
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
      <Carousel
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        CustomDot={<CustomDot/>}
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        keyBoardControl={true}
        // customTransition="all .5"
        transitionDuration={6000}
        // containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <CarouselCard
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="Card One"
          body="this is a test to see if this card is going to work"
        />
        <CarouselCard
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="Card Two"
          body="this is another test to see if the chard is changing"
        />
        <CarouselCard
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="Card Three"
          body="this is this third card I've made and I think that it's pretty cool"
        />
      </Carousel>
    </Card>
  );
};

export default CarouselMain;
