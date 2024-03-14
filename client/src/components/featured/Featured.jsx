import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Featured.scss";
// import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building mobile app"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <Link to="/gigs?cat=web">
            <button className="btnhover">Web Design</button>
            </Link>
            <Link to="/gigs?cat=web">
            <button className="btnhover">WordPress</button>
            </Link>
            <Link to="/gigs?cat=design">
            <button className="btnhover">Logo Design</button>
            </Link>
            <Link to="/gigs?cat=ai">
            <button className="btnhover">AI Services</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <img src="/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;