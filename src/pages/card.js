import React from "react";

function Card({ house, handleBookVisit }) {
  return (
    <div className="card">
      <img src={house.img_url} alt="House" />
      <div className="card-body">
        <h5 className="card-title">{house.estate_name}</h5>
        <p>{house.location}</p>
        <p>{house.bedrooms} Rooms</p>
        <p>Price: ${house.price}</p>
        <button onClick={() => handleBookVisit(house.id)}>Book a visit</button>
      </div>
    </div>
  );
}

export default Card;
