import React, { useState } from "react";
import "./portfolio.css";

import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [category, setCategory] = useState("All");

  const filterItem = (e) => {
    if (e.target.textContent === "All") {
      setItems(Menu);
      setCategory(e.target.textContent);
    } else {
      const updatedItems = Menu.filter((curElem) => {
        return curElem.category === e.target.textContent;
      });

      setItems(updatedItems);
      setCategory(e.target.textContent);
    }
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span
          className="work__item"
          style={category === "All" ? { borderBottom: "1px solid orange" } : {}}
          onClick={filterItem}
        >
          All
        </span>
        <span
          className="work__item"
          style={
            category === "Creative" ? { borderBottom: "1px solid orange" } : {}
          }
          onClick={filterItem}
        >
          Creative
        </span>
        <span
          className="work__item"
          style={category === "Art" ? { borderBottom: "1px solid orange" } : {}}
          onClick={filterItem}
        >
          Art
        </span>
        <span
          className="work__item"
          style={
            category === "Design" ? { borderBottom: "1px solid orange" } : {}
          }
          onClick={filterItem}
        >
          Design
        </span>
        <span
          className="work__item"
          style={
            category === "Branding" ? { borderBottom: "1px solid orange" } : {}
          }
          onClick={filterItem}
        >
          Branding
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="cover_img" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
