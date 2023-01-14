import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';

function HouseFinder() {
  const [houses, setHouses] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    price: { min: 0, max: 1000000 },
    numRooms: { min: 0, max: 20 },
    estateName: '',
  });

  useEffect(() => {
    fetchHouses();
  }, []);

  // Fetch houses from API iko hapa
  function fetchHouses() {
    axios
      .post('./houses', { params: filters })
      .then(response => {
        setHouses(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  // Handle filter changes
  function handleFilterChange(e) {
    const { name, value } = e.target;
    if (name === 'min-price' || name === 'max-price') {
      setFilters(prevFilters => ({
        ...prevFilters,
        price: {
          ...prevFilters.price,
          [name.split('-')[1]]: value,
        },
      }));
    } else if (name === 'min-rooms' || name === 'max-rooms') {
      setFilters(prevFilters => ({
        ...prevFilters,
        numRooms: {
          ...prevFilters.numRooms,
          [name.split('-')[1]]: value,
        },
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  }

  // handle submit 
  function handleSubmit(e){
    e.preventDefault();
    fetchHouses();
  }

  // Handle booking a visit for a house
  function handleBookVisit(id) {
    axios
      .post(`https://your-rails-api.com/houses/${id}/book_visit`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleFilterChange}
        />
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="min-price"
            placeholder="Min Price"
            value={filters.price.min}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="max price"
            placeholder="Max Price"
            value={filters.price.max}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>Number of Rooms:</label>
          <input
            type="number"
            name="min-rooms"
            placeholder="Min Rooms"
            value={filters.numRooms.min}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="max-rooms"
            placeholder="Max Rooms"
            value={filters.numRooms.max}
            onChange={handleFilterChange}
          />
        </div>
        <input
          type="text"
          name="estateName"
          placeholder="Estate Name"
          value={filters.estateName}
          onChange={handleFilterChange}
        />
        <button type="submit">Filter</button>
      </form>
      <div>
        {houses.map(house => (
          <Card key={house.id} house={house} handleBookVisit={handleBookVisit} />
        ))}
      </div>
    </div>
  );
}

export default HouseFinder;

