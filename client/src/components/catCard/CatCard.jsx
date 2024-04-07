import React from "react";
import "./catCard.scss";
import Slider from "infinite-react-carousel";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CatCard = ( {item} ) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <Link to = "/gigs?cat=design">
    <div className="catCard">
      <img src={item.img} alt = ""></img>
      <span className="desc">{item.desc}</span>
      <span className="title">{item.title}</span>
    </div>
    </Link>
    </div>
  );
};

export default CatCard;