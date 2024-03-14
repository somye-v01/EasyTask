import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mygigs.scss";

function MyGigs() {
  const [gigs, setGigs] = useState([
    { id: 1, title: "Stunning concept art", price: 13.99, sales: 34 },
    { id: 2, title: "Ai generated concept art", price: 120.99, sales: 41 },
    { id: 3, title: "Art painting for a community center", price: 125.99, sales: 24 },
    { id: 4, title: "Ai generated painting", price: 70.99, sales: 35 },
    { id: 5, title: "Realistic painting of a car", price: 20.99, sales: 25 },
    // ... other gigs
  ]);

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const handleDelete = (id) => {
    // Filter out the gig with the specified id
    const updatedGigs = gigs.filter((gig) => gig.id !== id);
    setGigs(updatedGigs);
  };

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {gigs.map((gig) => (
              <tr key={gig.id}>
                <td>
                  <img
                    className="image"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td>{gig.title}</td>
                <td>{gig.price.toFixed(2)}</td>
                <td>{gig.sales}</td>
                <td>
                  <img
                    className="delete"
                    src="/delete.png"
                    alt=""
                    onClick={() => handleDelete(gig.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
