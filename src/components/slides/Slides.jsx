import React from "react";
import "./Slides.scss";
import Slider from "infinite-react-carousel";
import CatCard from "../catCard/catCard";
import { cards } from "../../data";
const Slides = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={4} arrowsScroll={4}>
          {cards.map((card) => (
            <CatCard item={card} key={card.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slides;
