import React, {useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import GigCard from "../../components/gigCard/GigCard";
import { useLocation } from "react-router-dom";
function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();
  const categoryParam = new URLSearchParams(location.search).get("cat") || "ai";
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
          console.log(res.data)
        }),
  });

  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  const getCategoryHeading = () => {
    return `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Experts`;
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">EasyTask  Graphics & Design </span>
        <h1>{getCategoryHeading()}</h1>
        <p>
          Explore the boundaries of art and technology with EasyTask's {getCategoryHeading().toLowerCase()}.
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="/down.png " alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                  )}
                  <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
        {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
}

export default Gigs;