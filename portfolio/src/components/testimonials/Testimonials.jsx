import React from "react";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image1 from "../../assets/avatar-1.svg";
import Image2 from "../../assets/avatar-2.svg";
import Image3 from "../../assets/avatar-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image2,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 3,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>

      <Swiper
        modules={[Pagination, Mousewheel]}
        className="testimonials__container grid"
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        draggable={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => (
          <SwiperSlide className="testimonial__item" key={id}>
            <div className="thumb">
              <img src={image} alt="user_img" />
            </div>
            <h3 className="testimonials__title">{title}</h3>
            <span className="subtitle">{subtitle}</span>
            <div className="comment">{comment}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
