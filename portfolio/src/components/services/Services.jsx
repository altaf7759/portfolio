import React from "react";
import "./services.css";

import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image2,
    title: "Web Development",
    description:
      "I design and develop fast, responsive, and scalable websites tailored to your needs. With a focus on performance, security, and user experience.",
  },
  {
    id: 2,
    image: Image1,
    title: "UI/UX Design",
    description:
      "I craft intuitive, engaging, and user-centric designs that enhance experiences. With a focus on aesthetics, functionality, and usability.",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      "I capture compelling and high-quality visuals that tell stories. With a focus on creativity, detail, and composition.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="services_img" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
