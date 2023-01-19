import React from "react";
import { Link } from 'react-router-dom';
import '../css/houses.css'


function Card({ house, handleBookVisit }) {
  return (
    <div className="housing-card">
      <div className="house-place">
      <img className="house-img" src={house.img_url} alt="House" />
      <div className="card-body">
        <h5 className="card-title">{house.estate_name}</h5>
        <p className="housing-details">{house.location}</p>
        <p className="housing-details">{house.bedrooms} Bedrooms</p>
        <p className="housing-details">Price: KSh {house.price}</p>
        <Link to="/user">
  <button className="house-button" onClick={() => handleBookVisit(house.id)}>Book a visit</button>
</Link>
      </div>
      </div>
    </div>
  );
}

export default Card;